export default function responsive(id, mq, mobile, desktop){
    const d = document,
    w = window;
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktop;
        }
        else{
            d.getElementById(id).innerHTML = mobile;
        }
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);
    }
