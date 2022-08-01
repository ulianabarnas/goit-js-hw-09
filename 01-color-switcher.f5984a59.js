!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var i=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),a=new(function(){"use strict";function r(){e(t)(this,r),this.intervalId=null,this.isActive=!1}return e(n)(r,[{key:"start",value:function(){var e=this;this.isActive||(this.isActive=!0,this.updateBackgroundColor(),this.intervalId=setInterval((function(){e.updateBackgroundColor()}),1e3))}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1}},{key:"getRandomHexColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},{key:"updateBackgroundColor",value:function(){document.body.style.backgroundColor=this.getRandomHexColor()}}]),r}());i.addEventListener("click",a.start.bind(a)),o.addEventListener("click",a.stop.bind(a)),i.addEventListener("click",(function(){i.setAttribute("disabled",!0),o.removeAttribute("disabled")})),o.addEventListener("click",(function(){i.removeAttribute("disabled"),o.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.f5984a59.js.map
