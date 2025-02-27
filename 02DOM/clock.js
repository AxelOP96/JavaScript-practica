export default function reloj(start, finish, clock){
    const d = document;
    d.addEventListener("click", (e) =>{
        let temporizador;
        if(e.target.matches(start)){
            const fecha = Date();
            d.querySelector(clock).innerHTML = fecha;
            d.querySelector(start).setAttribute( "disabled","" );
        }

        if(e.target.matches(finish)){
            d.querySelector(clock).innerHTML = "";
            d.querySelector(start).removeAttribute("disabled");
            
        }
    });

}