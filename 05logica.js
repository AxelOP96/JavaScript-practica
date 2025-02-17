/**15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

console.log("Ejercicio 15");
const conversorBinarioDecimal = (numero=0, base=undefined) =>
(base === undefined)
? console.warn("Debe aclarar cual es la base")
: (base === 2 ? console.info(parseInt(numero, base)) : console.info(parseInt(numero, 10)));
console.log(conversorBinarioDecimal(100,2))

console.log("Ejercicio 16");

const aplicarDescuento = (monto=undefined, descuento=0) =>
    (monto === undefined) 
    ? console.warn("Monto no definido")
    : console.info(monto - ((monto * descuento) / 100));
//console.log(aplicarDescuento())
console.log(aplicarDescuento(1000,20))

console.log("Ejercicio 17")
const diferenciaEntreAnios = (fecha='1999,12,31') =>{
if (!(fecha instanceof Date)){
    console.warn("La fecha ingresada no es válida")
} 
let hoyMenosFecha = new Date().getTime() - fecha.getTime();
let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
let anios = Math.floor(hoyMenosFecha/aniosEnMS);
return anios;
}
console.log(diferenciaEntreAnios(new Date(1984,4,23)))