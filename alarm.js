export default function alarm(start, stop, alarm){
    const d = document;

    d.addEventListener("click", (e) =>{
        if(e.target.matches(start)){
            d.querySelector(alarm).play();
            d.querySelector(start).setAttribute("disabled", "");
        }

        if(e.target.matches(stop)){
            d.querySelector(alarm).pause();
            d.querySelector(start).removeAttribute("disabled");
        }
    })
}