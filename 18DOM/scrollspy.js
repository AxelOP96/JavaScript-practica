const d = document,
w = window;



export default function scrollSpy(){
    /**let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options); 
var target = document.querySelector("#listItem");
observer.observe(target);*/
    let panel = d.querySelector('.panel')
    let menu = d.querySelector('.menu')
    let section = d.querySelectorAll('section');
    let navLinks = d.querySelectorAll('.panel .menu a');

    w.onscroll = ()=>{
        section.forEach( sec =>{
            sec.style.width = '60%';
            sec.style.marginLeft = '10%'
            panel.style.top = '725px';
            panel.style.left= '1100px';
            panel.style.width = '70%';
            panel.style.minheight = '100vh';
            menu.style.alignitems = 'left';
            let top = w.scrollY;
            let offset = sec.offsetTop -150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height){
                navLinks.forEach( links =>{
                    links.classList.remove('is-active');
                    d.querySelector('.panel .menu a[href*=' + id + ']').classList.add('is-active');
                })
            }
        })
    }
}