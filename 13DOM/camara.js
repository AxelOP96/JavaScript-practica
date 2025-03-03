const d = document,
w= window,
n = navigator;
export default function activarCamara(webCamara, on, off){
    const $on = d.getElementById(on);
    let camara; 
    let video = d.getElementById(webCamara)
    
    d.addEventListener("click", (e) =>{
        if(e.target.matches(on)){
            camara = n.mediaDevices.getUserMedia({video:true, audio:false});
            camara.then(function(mediaStream){
                video.srcObject = mediaStream;
                video.play()
            });
            camara.catch(function(err) { console.log(err.name); });
        }
    
        else if(e.target.matches(off)){
            video.srcObject =null;
            camara = n.mediaDevices.getUserMedia({video:false, audio:false});
        }
    })


}