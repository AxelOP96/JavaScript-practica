/**1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

function contarCaracteres(cadena){
    let count = 0;
    try{
        if(typeof(cadena) === String){
            count = cadena.length;
        }
            
    }
    catch(error){
        console.log(error);
    }
    
    return cadena.length;
}
console.log("Ejercicio 1");
let texto = "Hola mundo";
console.log(contarCaracteres(texto))
console.log("Ejercicio 2");

function devolverTextoRecortado(cadena, numero){
    return cadena.substring(0, numero)
}
console.log(devolverTextoRecortado("Hola mundo", 4));
console.log("Ejercicio 3");

function devolverArrayTextosSeparados(cadena, caracter){
    return cadena.split(caracter);
}
console.log(devolverArrayTextosSeparados("hola que tal", " "))
console.log("Ejercicio 4")

function repetirTexto(cadena, numero){
    return cadena.repeat(numero);
}

console.log(repetirTexto('Hola mundo ', 3))