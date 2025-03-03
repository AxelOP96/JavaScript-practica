const d = document,
w = window;

export default function detectorDeConexion(network){
    const $network =d.getElementById(network);
    //Navigator.connection Returns a NetworkInformation object containing information about the network connection of a device
    
    w.addEventListener("offline", (e) =>{
        mostrarPopup($network, "Conexión Pérdida", "visible", "red");
        setTimeout(() =>{
            ocultarPopup($network);
        }, 5000)
    });
    w.addEventListener("online", (e) =>{
        mostrarPopup($network, "Conexión Reestablecida", "visible", "green");
        $network.style.display = "block";
        setTimeout(() =>{
            ocultarPopup($network);
        }, 5000)
    });
}
    function mostrarPopup($network, texto, visibility, bgcolor){
        $network.innerHTML = `${texto}`;
        $network.style.visibility = `${visibility}`;
        $network.style.backgroundColor = `${bgcolor}`;
    }
    function ocultarPopup($network){
        $network.style.display = "none";
    }
