const d = document,
w = window;
let $selected;
let voices = [];
export default function speakText(text, btn){
    const $id = d.getElementById(text);
    const $select = d.getElementById("speak-options");
    const $start = d.getElementById("start-reading");
    //SpeechSynthesis.getVoices() esto va en el select
    //speechSynthesis.speak(utterance);
    //SpeechSynthesis.speak()
    //let utterance = new SpeechSynthesisUtterance("Santino es un pelotudo!");
    let utterance;
    let synth = w.speechSynthesis;
    synth.onvoiceschanged = function() {
        voices = synth.getVoices();
        voices.forEach( (voice) =>{
            const $option = d.createElement("option");
            $option.innerHTML = `${voice.name}`;
            $option.setAttribute("data-speak", 0);
            $select.appendChild($option);
            
        })
        const $options = d.querySelectorAll('option[data-speak="0"]');
        $options.forEach( (opt) =>{
            if(opt.selected){
                $selected = opt.name;
            }
            else{
                $options[0].selected = 'true';
                $selected = voices[0].voice;
            }
        })
    };
    
    d.addEventListener("click", e =>{
        if(e.target === $start) {
            
            utterance = new SpeechSynthesisUtterance(`${$id.value}`)
            if($selected !== 'undefined') utterance.voice = voices[0].voice;
            else{
                utterance.voice = $selected;
            }
            speechSynthesis.speak(utterance);
        }    
    })
}