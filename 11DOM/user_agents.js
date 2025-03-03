const d = document,
    w = window;
export default function userAgent(list, content){
    
    const $nav = d.getElementById(list);
    const $content = d.getElementById(content);
    const li1 = d.createElement("li");
    li1.textContent = `User Agent: ${navigator.userAgent}` ;
    $nav.appendChild(li1);

    const li2 = d.createElement("li");
    li2.textContent = `Plataforma: ${navigator.userAgentData.platform}` ;
    $nav.appendChild(li2);
    
    const li3 = d.createElement("li");
    li3.textContent = `Navegador: ${navigator.userAgentData.brands[1].brand}` ;
    $nav.appendChild(li3);

    if(navigator.userAgentData.brands[1].brand === 'Chrome') $content.innerHTML = "Este contenido solo se ve en el navegador Chrome";
    else if(navigator.userAgentData.brands[1].brand === 'Brave') $content.innerHTML = "Este contenido solo se ve en el navegador Brave";
    else if(navigator.userAgentData.brands[1].brand === 'Opera') $content.innerHTML = "Este contenido solo se ve en el navegador Opera";
    else if(navigator.userAgentData.brands[1].brand === 'Firefox') $content.innerHTML = "Este contenido solo se ve en el navegador Firefox";
    else {$content.innerHTML = "Este contenido se ve en un navegador desconocido";}

    if(navigator.userAgentData.mobile) $content.innerHTML += "<br>Este contenido solo se ve en plataformas mobile ";
    else { $content.innerHTML += "<br>Este contenido solo se ve en plataformas de escritorio";}
}