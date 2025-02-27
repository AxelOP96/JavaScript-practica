export default function move(body){
    const d = document;

    d.addEventListener("keydown", (e)=>{
        let positionX=0;
        let positionY =0;
            if(e.key === 'ArrowUp'){
                positionY -=10;
                d.querySelector(body).style.transform = `translate(${positionX}px,${positionY}px)`;
                console.log(positionY)
            }
            if(e.key === 'ArrowDown'){
                positionY += 10;
                d.querySelector(body).style.transform = `translate((${positionX}px,${positionY}px)`;
            }
            if(e.key === 'ArrowRight'){
                positionX+=10;
                d.querySelector(body).style.transform = `translate(${positionX}px,${positionY}px)`;
            }
            if(e.key === 'ArrowLeft'){
                positionX-=10;
                d.querySelector(body).style.transform = `translate(${positionX}px,${positionY}px)`;
            }
    })
}