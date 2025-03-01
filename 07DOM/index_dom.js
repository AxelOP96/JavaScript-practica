import alarm from "./alarm.js";
import reloj from "./clock.js";
import finalCountdown from "./countdown.js";
import hamburgerMenu from "./hamburguer.js";
import changeMode from "./mode.js";
import {atajos, move} from "./movement.js";
import goTop from "./scroll.js";
/** */
const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    finalCountdown(".countdown");
    goTop(".top");
    changeMode(".mode", ".body", ".sun", ".moon")
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
