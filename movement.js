let positionX = 0;
let positionY = 0;
export function move(body, area, e){
    const d = document;
        
        const $ball = d.querySelector(body),
        $stage = d.querySelector(area),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
        
        switch(e.key){
            
            case  'ArrowUp':
                e.preventDefault();
                if(limitsBall.top > limitsStage.top) positionY--;
                break;
            
            case 'ArrowDown':
                e.preventDefault();
                if(limitsBall.bottom < limitsStage.bottom) positionY++;
                break;
            case 'ArrowRight':
                e.preventDefault();
                if(limitsBall.right < limitsStage.right) positionX++;
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if(limitsBall.left > limitsStage.left) positionX--;
                break;
            default:
                break;
        }
            $ball.style.transform = `translate(${positionX * 10}px, ${positionY * 10}px)`;

            
}
export function atajos(e){
    if(e.altKey && e.key === 'a'){
        alert("Activaste la alerta")
    }
    if(e.altKey && e.key === 'p'){
        prompt("Activaste el prompt")
    }
    if(e.altKey && e.key === 'c'){
        confirm("Activaste la confirmación")
    }
}