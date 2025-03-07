const d = document,
w = window;

export default function speakText(text, btn){
    const $id = d.getElementById(text);
    const $select = d.getElementById("speak-options");
    const $start = d.getElementById("start-reading");
    const utterance = new SpeechSynthesisUtterance();
    let voices = [];
    d.addEventListener("DOMContentLoaded", e =>{

        w.speechSynthesis.addEventListener("voiceschanged", (e) =>{
        
        voices = w.speechSynthesis.getVoices();
        console.log(voices)
        voices.forEach( (voice) =>{
            const $option = d.createElement("option");
            $option.innerHTML = `${voice.name}`;
            $option.setAttribute("data-speak", 0);
            $select.appendChild($option);
        });
    });
    });
    d.addEventListener("change", (e) =>{
        if(e.target === $select){
            utterance.voice = voices.find( (voice) => voice.name === e.target.value);
        }
    });
    d.addEventListener("click", e =>{
        if(e.target === $start) {
            utterance.text = (`${$id.value}`)
            speechSynthesis.speak(utterance);
        }    
    });
}