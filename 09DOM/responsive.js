export default function responsive(el1, el2, father){
    const d = document;
    const $el1 = d.querySelector(el1);
    const $el2 = d.querySelector(el2);
    const query = matchMedia("(max-width: 800px)");
    const queryMax = matchMedia("(min-width: 801px)");
    const a1 = d.createElement("a");
    const a2 = d.createElement("a");
    const elFather = d.getElementById(father);
    const href1 = $el1.getAttribute("src");
    
    const href2 = d.querySelector(el2).getAttribute("src");
    
    const text1 = d.createTextNode("Ver el video");
    const text2 = d.createTextNode("Ver el mapa");
    
    a1.setAttribute("href", `${href1}`);
    a2.setAttribute("href", `${href2}`);
    function actualizarEstado(){
        if(query.matches){
            $el1.classList.add("hidden");
            $el2.classList.add("hidden");
            if(!elFather.contains(a1)){
                a1.appendChild(text1);
                elFather.appendChild(a1);
            }
            if(!elFather.contains(a2)){
                a2.appendChild(text2);
                elFather.appendChild(a2);
            } 
        }
        
        if(queryMax.matches){
            if($el1.classList.contains("hidden")) $el1.classList.remove("hidden");
            if($el2.classList.contains("hidden")) $el2.classList.remove("hidden");
            if (elFather.contains(a1)) elFather.removeChild(a1);
            if (elFather.contains(a2)) elFather.removeChild(a2);
        }
    }
    actualizarEstado();

    query.addEventListener("change", actualizarEstado);
    queryMax.addEventListener("change", actualizarEstado);
}