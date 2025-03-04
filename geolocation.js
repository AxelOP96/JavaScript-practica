const d =document,
n = navigator;

export default function obtenerUbicacion(id){
    const $id = d.getElementById(id);

    if(n.geolocation){
        n.geolocation.getCurrentPosition(success);
    }else{
        $id.innerHTML = "Geolocalización no soportada"
    }

    function success(position){
        $id.insertAdjacentHTML("beforebegin", `Latitud:  ${position.coords.latitude}
    <br>Longitud:  ${position.coords.longitude} <br>Precisión:  ${position.coords.accuracy}
    <br> <a href="https://www.google.maps/@${coords.latitude},${coords.longitude},15z" target="_blank">Ver en Maps</a>`);
    }
}
