var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var o=n("iQIUW");const l=document.querySelector(".form");l.addEventListener("submit",(function(e){if(e.preventDefault(),r)return;const t=+l.elements.delay.value,i=+l.elements.step.value,n=+l.elements.amount.value;r=!0,setTimeout((()=>{let e=1,l=t+i;s(e,t).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}));const a=setInterval((()=>{if(e>=n)return clearInterval(a),void(r=!1);e+=1,s(e,l).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),l+=i}),i)}),t,i,n)}));let r=!1;function s(e,t){return new Promise(((i,n)=>{Math.random()>.3?i({position:e,delay:t}):n({position:e,delay:t})}))}o.Notify.init({useIcon:!1,timeout:6e3});
//# sourceMappingURL=03-promises.836ae3fd.js.map
