const $hamburger = document.getElementById("hamburger");
const $menu = document.querySelector('.d-none');
const $title = document.getElementById("title");
const $li = document.querySelectorAll("li");

$hamburger.addEventListener("click", () => {
    //$hamburger.classList.add("is-active");
    $menu.classList.toggle('d-none');
    /*if($hamburger.classList.contains("is-active")){
        $hamburger.classList.toggle("is-active");
        $menu.classList.add("d-none");
    }*/
    
});

document.addEventListener("click", (e) =>{
    if(e.target.matches(".opacity ul li")){
        $title.innerHTML = e.target.className;
    }
});