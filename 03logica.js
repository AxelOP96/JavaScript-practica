/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120
 */
console.log("Ejercicio 9")
const aleatorioEntre501Y600 = () => Math.round(Math.random()* (600 - 501) + 501);
console.log(aleatorioEntre501Y600());


console.log("Ejercicio 10");
const esCapicua = (numero=0) => 
(!numero)
    ? console.warn("El numero no puede ser cero")
    : console.info(numero.toString().split("").reverse().join("") === numero.toString());

console.log(esCapicua(2002));

console.log("Ejercicio 11")
const factorial = (num = 0) => { 
    let factor = 1;
    for(let i=num; i>1;i--){
        factor*=i;
    }
    return factor;
}
console.log(factorial(5))