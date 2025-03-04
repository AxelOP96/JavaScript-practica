const d =document,
n = navigator;

export default function obtenerUbicacion(id){
    const $id = d.getElementById(id);

    if(n.geolocation){
        console.log("Funciona")
        n.geolocation.getCurrentPosition(success);
        console.log(n.geolocation.getCurrentPosition(success))
    }else{
        $id.innerHTML = "Geolocalización no soportada"
    }

    function success(position){
        $id.insertAdjacentHTML("beforebegin", `Latitud:  ${position.coords.latitude}
    <br>Longitud:  ${position.coords.longitude} <br>Precisión:  ${position.coords.accuracy}`);
    }
}
