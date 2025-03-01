export default function changeMode(btn, body, sun, moon){
    const d = document;
    //console.log(d.querySelector(sun).classList.contains("invisible"));
    d.addEventListener("click", (e)=>{
        if((e.target.matches(btn)|| e.target.matches(`${btn} *`)) && d.querySelector(sun).classList.contains("invisible")){
            d.querySelector(body).style.backgroundColor = 'black';
            d.querySelector(body).style.color = 'yellow';
            d.querySelector(sun).classList.remove("invisible");
            d.querySelector(moon).classList.add("invisible");
        }

        else if((e.target.matches(btn)|| e.target.matches(`${btn} *`)) && d.querySelector(moon).classList.contains("invisible")){
            d.querySelector(body).style.backgroundColor = 'white';
            d.querySelector(body).style.color = 'black';
            d.querySelector(sun).classList.add("invisible");
            d.querySelector(moon).classList.remove("invisible");
        }
    })
}