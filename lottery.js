const options = [
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "C++",
        "Ruby",
        "PHP",
        "Swift",
        "Go",
        "Kotlin",
        "TypeScript",
        "Rust",
        "Dart",
        "Scala",
        "Perl",
        "Lua",
        "Elixir",
        "Haskell",
        "Clojure",
        "Objective-C",
        "Groovy",
        "Shell",
        "SQL",
        "Visual Basic",
        "R",
        "MATLAB",
        "F#",
        "COBOL",
        "Fortran",
        "Assembly",
        "VBScript"
    ];
const d = document;
export default function sortearGanador(btn){
    const $btn = d.querySelector(btn);

    const $ul = d.createElement("ul");
    for(let i =0;i<options.length;i++){
        const $li = d.createElement("li");
        const $liContent = d.createTextNode(`${options[i]}`);
        $li.appendChild($liContent);
        $ul.appendChild($li);
    }
    
    $btn.insertAdjacentElement("beforebegin", $ul);


    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            const winner = options[Math.floor(Math.random()*options.length)];
            alert(`el ganador es  ${winner}`);
            console.log(winner)
        }
    })
}

