/**5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

 */

console.log("Ejercicio 5");

const invertirLetras = (cadena="") =>{
    let nueva = "";
    if (!cadena) return console.warn("La cadena está vacia");
    else{
        
        for(let i = cadena.length; i>=0;i--){
            nueva += cadena.charAt(i);
        } 

    }
    return nueva;
}
console.log(invertirLetras("Hola Mundo"))
console.log("Ejercicio 6");

const contarPalabrasRepetidas = (cadena="", palabra="") =>{
    if(!cadena) console.warn("La cadena está vacia")
    if (!palabra) console.warn("La palabra está vacia")
    let array = cadena.split(" ");
let contador = 0;
    for(let i=0; i< array.length; i++){
        if(array[i] === palabra) contador++;
    }
    return contador;

} 
console.log(contarPalabrasRepetidas("hola mundo adios mundo", "mundo"))
console.log("Ejercicio 7")
/**7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const esPalindromo = (cadena = "") =>{
    if(!cadena) console.warn("La cadena está vacia");
    let prim = "";
    let seg = "";
    let rev = "";
    for(let i=0; i< cadena.length; i++){
        prim += cadena.charAt(i);
    }
    for(let j=cadena.length-1; j>=0; j--){
        seg += cadena.charAt(j);
    }
    for(let k=prim.length; k>= 0;k--){
        rev += prim.charAt(k);
    }

    if(prim.toLowerCase() === rev.toLowerCase()) return true;

}
console.log(esPalindromo("Salas"));
console.log("Ejercicio 8");

const eliminarPatron = (cadena = "", patron="") =>{
    (!cadena)
    ? console.warn("La cadena está vacia")
    : (!patron)
        ? console.warn("el patron está vacio")
        : console.info(cadena.replaceAll("xyz", ""));
}
console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))