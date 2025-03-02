export default function goTop(btnTop, first){
    const d=document,
    w= window;
    const $scrollBtn = d.querySelector(btnTop);

    w.addEventListener("scroll", (e) =>{
        let scrollTop = w.scrollY;
        if(scrollTop > 600){
            $scrollBtn.style.opacity = '1';
            $scrollBtn.style.visibility = 'visible';
        }
        else{
            $scrollBtn.style.opacity = '0';
        }
        
    })
    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnTop)){
            w.scrollTo({
                behavior: "smooth",
                top:0
            });
        }
    })
}