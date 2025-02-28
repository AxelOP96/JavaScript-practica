export default function goTop(btnTop, first){
    const d=document;

    d.addEventListener("mousedown", (e) =>{
        /* if(e.target.matches(btnTop) || e.target.matches(`${btnTop} *`)){

        } */
        d.querySelector(btnTop).style.display = 'block';
    })
}