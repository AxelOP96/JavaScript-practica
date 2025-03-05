const d = document,
w = window;
const srcs = ["assets/brook.webp","assets/luffy.webp","assets/zoro.webp","assets/sanji.webp","assets/usopp.webp","assets/nami.webp","assets/chopper.webp","assets/robin.webp","assets/franky.webp","assets/jimbe.webp","assets/loki.webp"]
export default function slider(btn){
    
    const $btn = d.querySelector(btn);
    const $prev = $btn.children[0],
    $next = $btn.children[1],
    $img = $btn.previousElementSibling;
    
    d.addEventListener("click", e =>{
        let indiceActual = 0;
        let $src;
        for( let i=0; i<srcs.length;i++){
            if($img.getAttribute("src") === srcs[i]){
                $src = srcs[i];
                indiceActual = i;
                }
        }
        
        if(e.target === ($prev)){
            if(indiceActual===0) $img.setAttribute("src", `${srcs[srcs.length-1]}`)
            else{
                $img.setAttribute("src", `${srcs[indiceActual-1]}`)
                indiceActual--;
            }
            
        }
        if(e.target === ($next)){
            if(indiceActual===srcs.length-1) $img.setAttribute("src", `${srcs[0]}`)
            else{
                $img.setAttribute("src", `${srcs[indiceActual+1]}`)
                indiceActual++;
            }
            
        }
    })
    let breakpoint = w.matchMedia("(min-width:1000px)");
    const responsiveSlider = e =>{
        
        if(e.matches){
            $img.style.width = "50%";
        }else{
            $img.style.width = "500px";
        }
    }
    breakpoint.addListener(responsiveSlider);
    responsiveSlider(breakpoint)
}