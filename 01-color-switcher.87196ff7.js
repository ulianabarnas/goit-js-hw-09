const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");const r=new class{start(){this.updateBackgroundColor(),this.intervalId=setInterval((()=>{this.updateBackgroundColor()}),1e3)}stop(){clearInterval(this.intervalId)}getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}updateBackgroundColor(){document.body.style.backgroundColor=this.getRandomHexColor()}constructor(){this.intervalId=null}};t.addEventListener("click",r.start.bind(r)),e.addEventListener("click",r.stop.bind(r)),t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.87196ff7.js.map
