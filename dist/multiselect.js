!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-multiselect"]=t():e["vue-multiselect"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Multiselect=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={install:function(e){e.component("vue-multiselect",o.default)}},t.Multiselect=o.default},function(e,t,n){var r=n(2)(n(3),n(4),null,null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r,o){var u,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,s=e.default);var f="function"==typeof s?s.options:s;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns),r&&(f._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},f._ssrRegister=c):n&&(c=n),c){var l=f.functional,d=l?f.render:f.beforeCreate;l?f.render=function(e,t){return c.call(t),d(e,t)}:f.beforeCreate=d?[].concat(d,c):[c]}return{esModule:u,exports:s,options:f}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{message:"Hello world"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",[e._v(e._s(e.message))])},staticRenderFns:[]}}])});