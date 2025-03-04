import alarm from "./alarm.js";
import activarCamara from "./camara.js";
import reloj from "./clock.js";
import detectorDeConexion from "./conexion.js";
import finalCountdown from "./countdown.js";
import obtenerUbicacion from "./geolocation.js";
import hamburgerMenu from "./hamburguer.js";
import guardarModo from "./local_storage.js";
import changeMode from "./mode.js";
import {atajos, move} from "./movement.js";
import pruebaURL from "./probar_URL.js";
import responsive from "./responsive.js";
import goTop from "./scroll.js";
import {cargarDescripcion, filtrarBusqueda} from "./search_bar.js";
import userAgent from "./user_agents.js";
/** */
const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    finalCountdown(".countdown");
    goTop(".top");
    changeMode(".mode", ".body", ".sun", ".moon");
    responsive("youtube", "(min-width:800px)", '<a href="https://www.youtube.com/embed/ocu_cPbPKjM?si=uXDbbbd1Oyku_1iS" target="_blank">Ver video</a>', `<iframe id="youtu" width="560" height="315" src="https://www.youtube.com/embed/ocu_cPbPKjM?si=uXDbbbd1Oyku_1iS" title="YouTube video player" ></iframe>`);
    responsive("maps", "(min-width:800px)", '<a href="https://maps.app.goo.gl/6gxhjwazxE5cjrSv8" target="_blank">Ver mapa</a>', `<iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73583.2604337712!2d-68.38520333870377!3d-54.80673630541112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c22b5bad109bf%3A0x5498473dba43ebfc!2sV9410%20Ushuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses!2sar!4v1740876097126!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    pruebaURL("URL", "#alto", "#ancho", "#submit", "#close");
    userAgent("navigation", "content");
    activarCamara("webCamara", "#on", "#off");
    obtenerUbicacion("section9");
    filtrarBusqueda(".card", ".busqueda",e);
})
d.addEventListener("DOMContentLoaded", (e) =>{
    reloj(".start-c", ".stop-c", ".clock")
    cargarDescripcion("container");
})
d.addEventListener("DOMContentLoaded", (e)=>{
    alarm(".start-a", ".stop-a", ".sound");
})
d.addEventListener("keydown", (e) =>{
    move(".circle", ".area", e);
    atajos(e);
    
});
guardarModo(".sun" ,".moon");
detectorDeConexion("network");
