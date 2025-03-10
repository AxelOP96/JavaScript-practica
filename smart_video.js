const d = document;

export default function playVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");
    
    const cb = (entries =>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            d.addEventListener("visibilitychange", e =>{
                d.visibilityState==='visible' ? entry.target.play() : entry.target.pause();
            })
        })
    })

    const observer =new IntersectionObserver(cb, {
        threshold: [0.5, 0.75]
    })
    $videos.forEach((el) =>{
        observer.observe(el);
    })
}