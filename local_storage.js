//Guardo la configuracion en un j¿bjeto
//cuando hago el DOMContentLoaded lo traigo y ejecuto

export default function guardarModo(modo1, modo2, e){

    const d = document;
    if(!d.querySelector(modo1).classList.contains("invisible")){
        localStorage.setItem("sun", modo1);
        localStorage.removeItem("moon", modo2);
    }
    else if(!d.querySelector(modo2).classList.contains("invisible")){
        localStorage.setItem("moon", modo2);
        localStorage.removeItem("sun", modo1);
    }
    
    if(!localStorage.getItem("moon")){
        d.querySelector(".body").style.backgroundColor = "white";
        d.querySelector(".body").style.color = "black";
    }
    else if(!localStorage.getItem("sun")){
        d.querySelector(".body").style.backgroundColor = "black";
        d.querySelector(".body").style.color = "yellow";
    }
    
}