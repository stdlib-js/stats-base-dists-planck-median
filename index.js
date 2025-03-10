// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r=Math.ceil,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,i=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,u="function"==typeof f?f.toStringTag:"",a=o&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,f,a;if(null==n)return e.call(n);r=n[u],a=u,t=null!=(f=n)&&i.call(f,a);try{n[u]=void 0}catch(t){return e.call(n)}return o=e.call(n),t?n[u]=r:delete n[u],o}:function(n){return e.call(n)},y="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(y&&r instanceof Uint32Array||"[object Uint32Array]"===a(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?l:function(){throw new Error("not implemented")};var p,A=t,d="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,NaN]),r=t,n=(d&&r instanceof Float64Array||"[object Float64Array]"===a(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m,v=p,w="function"==typeof Uint8Array,s="function"==typeof Uint8Array?Uint8Array:null,h="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,256,257]),r=t,n=(w&&r instanceof Uint8Array||"[object Uint8Array]"===a(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?h:function(){throw new Error("not implemented")};var N,F=m,S="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var n,t,r;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,65536,65537]),r=t,n=(S&&r instanceof Uint16Array||"[object Uint16Array]"===a(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?j:function(){throw new Error("not implemented")};var E,T={uint16:N,uint8:F};(E=new T.uint16(1))[0]=4660;var I=52===new T.uint8(E.buffer)[0],x=!0===I?1:0,O=new v(1),G=new A(O.buffer);function M(n){return O[0]=n,G[x]}var P=!0===I?1:0,V=new v(1),Y=new A(V.buffer),_=1023,k=Number.NEGATIVE_INFINITY,q=.6931471803691238,z=1.9082149292705877e-10,B=0x40000000000000,C=.3333333333333333,D=1048575,H=2146435072,J=1048576,K=1072693248;function L(t){var r,o,e,i,f,u,a,y,c,l,p,A;return 0===t?k:n(t)||t<0?NaN:(f=0,(o=M(t))<J&&(f-=54,o=M(t*=B)),o>=H?t+t:(f+=(o>>20)-_|0,f+=(y=614244+(o&=D)&1048576|0)>>20|0,a=(t=function(n,t){return V[0]=n,Y[P]=t>>>0,V[0]}(t,o|y^K))-1,(D&2+o)<3?0===a?0===f?0:f*q+f*z:(u=a*a*(.5-C*a),0===f?a-u:f*q-(u-f*z-a)):(y=o-398458|0,c=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(y|=c)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*q-(r-(l*(r+u)+f*z)-a)):0===f?a-l*(a-u):f*q-(l*(a-u)-f*z-a))))}return function(t){return n(t)||t<=0?NaN:r(-L(.5)/t)-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).median=t();
//# sourceMappingURL=index.js.map
