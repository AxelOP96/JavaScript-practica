/**18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

console.log("Ejercicio 18");
const cuentaVocalesYConsonantes = (cadena="") =>{
    if(!cadena)
        console.warn("La cadena está vacía");
    let vocal = 0, consonantes = 0;
    for(let i=0; i< cadena.length;i++){
        if(cadena.charCodeAt(i) === 65 || cadena.charCodeAt(i) === 69 || cadena.charCodeAt(i) === 73 || cadena.charCodeAt(i) === 79 || cadena.charCodeAt(i) === 85 || cadena.charCodeAt(i) === 97 || cadena.charCodeAt(i) === 101 || cadena.charCodeAt(i) === 105 || cadena.charCodeAt(i) === 111 || cadena.charCodeAt(i) === 117 ){
            vocal++;
        }
        if((cadena.charCodeAt(i) >= 66 && cadena.charCodeAt(i) <=68) || (cadena.charCodeAt(i) >= 70 && cadena.charCodeAt(i) <=72) || (cadena.charCodeAt(i) >= 74 && cadena.charCodeAt(i) <=78) || (cadena.charCodeAt(i) >= 80 && cadena.charCodeAt(i) <=84) || (cadena.charCodeAt(i) >= 86 && cadena.charCodeAt(i) <=90) || (cadena.charCodeAt(i) >= 98 && cadena.charCodeAt(i) <=100) || (cadena.charCodeAt(i) >= 102 && cadena.charCodeAt(i) <=104) || (cadena.charCodeAt(i) >= 106 && cadena.charCodeAt(i) <=110) || (cadena.charCodeAt(i) >= 112 && cadena.charCodeAt(i) <=116) || (cadena.charCodeAt(i) >= 118 && cadena.charCodeAt(i) <=122) ){
            consonantes++;
        }
    }
    return `Vocales: ${vocal}, Consonantes: ${consonantes}`;
}
console.log(cuentaVocalesYConsonantes("Hola mundo"))
console.log("Ejercicio 19");

const validarNombreValido = (nombre="") =>{
    if(!nombre){ 
        return console.warn("La cadena está vacia")
    }
    //let regExp = new RegExp("^[A-Za-z\s\-']+$");
    return console.info(/[A-Za-z\s\-']/.test(nombre));
}
console.log(validarNombreValido("Axel Daniel"));

console.log(validarNombreValido())
console.log("Ejercicio 20");
const validarEmailValido= (mail="") =>{
    if(!mail){ return console.warn("La cadena está vacia")}
    //let regExp = "^[A-Za-z\s\-']+$";
    return console.info(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail));
}
console.log(validarEmailValido("axeelleguero@gmail.com"));