const d = document;

export default function sendForm(){
    const $idsInput = d.querySelectorAll("input[data-form-validation]")
    const $span = d.querySelectorAll(".check");
    const $comments = d.getElementById("comments");
    const $spanLength = d.querySelector(".check-length")
    d.addEventListener("keyup", (e) =>{
        if($comments.value.length > 255){
            $spanLength.innerHTML = "Los comentarios no pueden exceder los 255 caracteres"
            $spanLength.classList.add("invalid");
        }
        $idsInput.forEach( (id) =>{
            const regexp = new RegExp(`${e.target.pattern}`) ;
            
            $span.forEach( span =>{
                if(e.target === id && span.parentElement === id.parentElement){
                    console.log("test ", regexp.test(id.value))
                    if ((!regexp.test(id.value)) ){
                        id.style.border = '3px solid red';
                        span.innerHTML = `${id.placeholder}`;
                        span.classList.add("invalid");
                    }
                    else if(regexp.test(id.value)){
                        span.classList.remove("invalid");
                        id.style.border = '3px solid rgb(169, 244, 169)';
                        span.innerHTML = "";
                    } 
                    else{
                        id.style.border = 'none';
                    }
                }
            })
            
        })
    })
}