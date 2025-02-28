export default function finalCountdown(countdown){
    const d = document;
    const fechaFinal = new Date("April 2, 2025 00:00:00");
    
    const temporizador = setInterval(() =>{
        const fechaActual = new Date();
        let seconds = (fechaFinal - fechaActual)/1000;
        let dias = Math.round(seconds/86400);
        let horas = Math.round((seconds%86400)/3600);
        let minutos = Math.round(((seconds%86400)%3600)/60).toFixed();
        let segundos = Math.round((((seconds%86400)%3600)%60)%60).toFixed();
        d.querySelector(countdown).textContent = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

        if(seconds===0 || dias<0){
            clearInterval(temporizador);
            alert("Feliz cumpleaños crack");
        }
    },1000);
    
    
}