function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(t,e,n){var o,r,i,f,a,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function w(t){return c=t,a=setTimeout(j,e),l?b(t):f}function h(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-c>=i}function j(){var t=v();if(h(t))return O(t);a=setTimeout(j,function(t){var n=e-(t-u);return d?m(n,i-(t-c)):n}(t))}function O(t){return a=void 0,p&&o?b(t):(o=r=void 0,f)}function T(){var t=v(),n=h(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return w(u);if(d)return a=setTimeout(j,e),b(u)}return void 0===a&&(a=setTimeout(j,e)),f}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:O(v())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(t,e,{leading:o,maxWait:e,trailing:r})};let b={};const w={form:document.querySelector(".feedback-form")};w.form.addEventListener("submit",(function(t){t.preventDefault(),t.target.reset(),localStorage.removeItem("form-data"),console.log(b),b={}})),window.addEventListener("load",(function(t){try{const t=localStorage.getItem("form-data");if(!t)return;b=JSON.parse(t)}catch(t){console.log(t.message)}})),w.form.addEventListener("input",t(e)((t=>{const{name:e,value:n}=t.target;b[e]=n.trim(),localStorage.setItem("form-data",JSON.stringify(b))}),2e3));
//# sourceMappingURL=03-feedback.02ff655a.js.map
