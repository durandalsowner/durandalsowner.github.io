(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},SuFq:function(t,e,r){var n=r("I+eb"),o=r("0GbY"),c=r("HAuM"),u=r("glrk"),i=r("hh1v"),a=r("fHMY"),f=r("BTho"),p=r("0Dky"),l=o("Reflect","construct"),s=p((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),b=!p((function(){l((function(){}))})),y=s||b;n({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,e){c(t),u(e);var r=arguments.length<3?t:c(arguments[2]);if(b&&!s)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(f.apply(t,n))}var o=r.prototype,p=a(i(o)?o:Object.prototype),y=Function.apply.call(t,p,e);return i(y)?y:p}})},X8hv:function(t,e,r){function n(t,e,r){return(n=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("pNMO"),r("4Brf"),r("0oug"),r("ma9I"),r("TeQF"),r("QWBl"),r("pjDv"),r("yXV3"),r("4mDm"),r("2B1R"),r("+2oP"),r("sMBO"),r("5DmW"),r("27RR"),r("tkto"),r("07d7"),r("SuFq"),r("JfAA"),r("PKPk"),r("FZtP"),r("3bBZ"),r("pNMO"),r("4Brf"),r("0oug"),r("ma9I"),r("TeQF"),r("QWBl"),r("pjDv"),r("yXV3"),r("4mDm"),r("2B1R"),r("+2oP"),r("sMBO"),r("5DmW"),r("27RR"),r("tkto"),r("07d7"),r("SuFq"),r("JfAA"),r("PKPk"),r("FZtP"),r("3bBZ");var l=r("mXGw"),s=r("7ljp").mdx,b=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["scope","children"]),c=b(e),i=l.useMemo((function(){if(!r)return null;var t=f({React:l,mdx:s},c),e=Object.keys(t),o=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(u(e),[""+r])).apply(void 0,[{}].concat(u(o)))}),[r,e]);return l.createElement(i,f({},o))}},kT7v:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return y}));r("pNMO"),r("TeQF"),r("QWBl"),r("5DmW"),r("27RR"),r("tkto"),r("FZtP");var n=r("mXGw"),o=r.n(n),c=r("2A+t"),u=r("izhR"),i=r("A2+M"),a=r("Q3iF"),f=r("GIzu"),p=function(t){var e=t.data.page;return Object(c.c)(a.a,null,Object(c.c)(f.a,{title:e.title,description:e.excerpt}),Object(c.c)(u.d,{variant:"styles.h2"},e.title),Object(c.c)("section",{sx:{my:5}},Object(c.c)(i.MDXRenderer,null,e.body)))};function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.default=function(t){var e=t.data,r=e.page;return o.a.createElement(p,{data:s(s({},e),{},{page:r})})};var y="1594686464"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-page-query-tsx-143de33b2956a3434bce.js.map