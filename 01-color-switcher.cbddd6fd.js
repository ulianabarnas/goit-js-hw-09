const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");const i=new class{start(){this.isActive||(this.isActive=!0,this.updateBackgroundColor(),this.intervalId=setInterval((()=>{this.updateBackgroundColor()}),1e3))}stop(){clearInterval(this.intervalId),this.isActive=!1}getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}updateBackgroundColor(){document.body.style.backgroundColor=this.getRandomHexColor()}constructor(){this.intervalId=null,this.isActive=!1}};t.addEventListener("click",i.start.bind(i)),e.addEventListener("click",i.stop.bind(i)),t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.cbddd6fd.js.map
