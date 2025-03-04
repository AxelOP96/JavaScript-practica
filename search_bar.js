const d = document;
export function cargarDescripcion(id){
    const $id = d.getElementById(id);
    let i=0;
    for(i; i<$id.children.length;i++){
        const child = $id.children.item(i).children[0];
        const $father = child.parentElement;
        const $figcaption = d.createElement("figcaption");
        const $figcaptionText = d.createTextNode(`${child.getAttribute('src').substring(7, child.getAttribute('src').length-5)}`)
        $figcaption.appendChild($figcaptionText);
        $father.appendChild($figcaption);   
    }
}


export function filtrarBusqueda(id, searchBar,){
    

    d.addEventListener("keyup", e =>{
        if(e.target.matches(searchBar)){
            /* for(const elem of $id.children){    
                
                if(!(elem.children[1].textContent.includes(e.target.value))){
                    
                    elem.classList.add("hidden");
                    
                }
                else{
                        elem.parentElement.classList.remove("hidden")
                    }
                }
            } *///Funciona pero no actualiza
             //Esta forma es más prolija
            d.querySelectorAll(id).forEach( el => 
                el.textContent.toLowerCase().includes(e.target.value) ? el.classList.remove("hidden") : el.classList.add("hidden"));
        }
    });

}