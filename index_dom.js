import alarm from "./alarm.js";
import reloj from "./clock.js";
import hamburgerMenu from "./hamburguer.js";
import {atajos, move} from "./movement.js";
/** */
const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
})
d.addEventListener("DOMContentLoaded", (e) =>{
    reloj(".start-c", ".stop-c", ".clock")
})
d.addEventListener("DOMContentLoaded", (e)=>{
    alarm(".start-a", ".stop-a", ".sound");
})
d.addEventListener("keydown", (e) =>{
    move(".circle", ".area", e)
    atajos(e)
});
