export default function guardarModo(modo1, modo2){

    const d = document;
    if(!d.querySelector(modo1).classList.contains("invisible")){
        localStorage.setItem("sun", modo1);
        localStorage.removeItem("moon");
    }
    else if(!d.querySelector(modo2).classList.contains("invisible")){
        localStorage.setItem("moon", modo2);
        localStorage.removeItem("sun");
    }
    
    window.onload = () =>{
        if(localStorage.getItem("moon")!==null){
            d.querySelector(".body").style.backgroundColor = "black";
            d.querySelector(".body").style.color = "yellow";
        }
        else if(localStorage.getItem("sun")!==null){
            d.querySelector(".body").style.backgroundColor = "white";
            d.querySelector(".body").style.color = "black";
        }
        else {
            d.querySelector(".body").style.backgroundColor = "white";
            d.querySelector(".body").style.color = "black";
        }
    }
    
}