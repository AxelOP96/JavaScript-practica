/**
 * 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */

console.log("Ejercicio 12");
const esPrimo = (numero=undefined) =>{
    if(numero ===0) return console.error("Numero incorrecto");
    if(typeof numero !== "number") return console.warn("Error, el tipo ingresado no es válido");
    let esPrimo = true;
    for(let i=2; i<numero;i++){
        if(numero%i===0) return false;
    }
    return esPrimo;
}
console.log(esPrimo(7));
console.log("Ejercicio 13");
const esPar = (numero = undefined) => (typeof numero === "number") ? (numero % 2 == 0 ? "Par" : "Impar") : console.warn("El tipo ingresado no es valido");
console.log(esPar(29))


console.log("Ejercicio 14");
const celsiusAFahrenheit = (grados= 0, conversor = undefined) => {
    if(typeof grados === "number" && conversor ==="C"){
        return (`${grados+32}°F`);
    }
    else if(typeof grados === "number" && conversor ==="F"){
        return (`${grados-32}°C`);
    } else{
        console.warn("El tipo ingresado no es valido");
    }
}
console.log(celsiusAFahrenheit(0, "F"));