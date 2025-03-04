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


export function filtrarBusqueda(id, searchBar,e){
    const $id = d.getElementById(id);
    const $searchBar = d.getElementById(searchBar);
    //console.log("Hijo de div", $id.children)
    //console.log("Hijo de figure", $id.children.item(0).children[0])
    
    
    //d.addEventListener("keydown", (e) =>{
    //    console.log(e.key)
    //    console.log($searchBar)
        //console.log($id.children.item(0).children[1])
        //const $textToFind = $id.children.item(0).children[1].textContent.includes("l")
        //console.log($textToFind)
        //console.log($searchBar.value)
        //$id.children.classList.add("hidden")
                    //console.log($id.children)
                    //console.log($id.children.namedItem)
                    //for(const item of $id.children){
                    //    console.log(item.classList.contains("hidden"))
                    //    item.classList.add("hidden")
                    //}
        //console.log(e.target === )
        if(e.target === $searchBar){
            for(const elem of $id.children){    
                //console.log("el elemento es ",elem.children[1])
                //console.log("el texto es ",elem.children[1].textContent)
                //console.log(!(elem.children[1].textContent.includes($searchBar.value)))
                if(!(elem.children[1].textContent.includes(`${$searchBar.value}`))){
                    //console.log("el padre es",elem.parentElement)
                    //console.log("el elemento a agregar la clase es ", elem)
                    elem.classList.add("hidden");
                    
                }
                else{
                        elem.parentElement.classList.remove("hidden")
                    }
                }
        }
        
    

}