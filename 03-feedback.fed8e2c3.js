function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,u=setTimeout(O,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function O(){var e=v();if(j(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function S(e){return u=void 0,p&&o?y(e):(o=i=void 0,a)}function h(){var e=v(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},h.flush=function(){return void 0===u?a:S(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),w=y.querySelector('[name="email"]'),j=y.querySelector('[name="message"]');window.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:n}=JSON.parse(e);w.value=t,j.value=n}})()})),y.addEventListener("input",e(t)((()=>{(()=>{const e={email:w.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})()}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),w.value="",j.value="",localStorage.removeItem("feedback-form-state"),console.log("Form data submitted:",{email:w.value,message:j.value})}));
//# sourceMappingURL=03-feedback.fed8e2c3.js.map
