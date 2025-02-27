export default function reloj(start, finish, clock){
    const d = document;
    let temporizador;
    d.addEventListener("click", (e) =>{
        if(e.target.matches(start)){
            temporizador = setInterval(() => {
                const fecha = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h2>${fecha}</h2>`;
            }, 1000);
            
            
            d.querySelector(start).setAttribute( "disabled","" );
        }

        if(e.target.matches(finish)){
            clearInterval(temporizador);
            d.querySelector(clock).innerHTML = "";
            d.querySelector(start).removeAttribute("disabled");
            
        }
    });

}