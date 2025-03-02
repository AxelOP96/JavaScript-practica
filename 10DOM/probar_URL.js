export default function pruebaURL(URL, width, height, send, close){
    const d = document,
    w = window;

    d.addEventListener("click", (e) =>{
        if(e.target.matches(send)){
            e.preventDefault();
            const $URL = d.getElementById(URL).value;
            const windowFeatures = `width=${width}, height=${height}`;
            const ventana = w.open(`${$URL}`, "popup", windowFeatures);
        }
        
    });

    d.addEventListener("click", (e) =>{
        if(e.target.matches(close)){
            ventana.close();
        }
    })
}