export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;
    d.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}
/*
const $hamburger = document.getElementById("hamburger");
const $menu = document.querySelector('.d-none');
const $title = document.getElementById("title");
const $li = document.querySelectorAll("li");

$hamburger.addEventListener("click", () => {
    //$hamburger.classList.add("is-active");
    $menu.classList.toggle('d-none');
    
});

document.addEventListener("click", (e) =>{
    if(e.target.matches(".opacity ul li")){
        $title.innerHTML = e.target.className;
    }
});
*/

