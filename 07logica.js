/**21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

console.log("Ejercicio 21");
const devolverCuadrado = (array=[]) => {
    let newArray=[];
    for(let i=0;i<array.length;i++){
        newArray[i] = array[i] * array[i];
    }
    return newArray;
}
console.log(devolverCuadrado([1,4,5]))

console.log("Ejercicio 22");
const devolverExtremos = (array=[]) => {
    let newArray=[];
    let numeroMin = Number.MAX_VALUE;
    let numeroMax = Number.MIN_VALUE;
    for(let i=0;i<array.length;i++){
        if(array[i] < numeroMin) numeroMin = array[i];
        if(array[i]> numeroMax) numeroMax = array[i];
    }
    newArray.push(numeroMax);
    newArray.push(numeroMin);
    return newArray;
}
console.log(devolverExtremos([1,4,5,99,-60]));

console.log("Ejercicio 23");
/** 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
const dividirParesEImpares = (array=[]) => {
    const pares = [];
    const impares = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            pares.push(array[i]);
        }else{
            impares.push(array[i]);
        }
    }
    let objeto = {
        pares,
        impares
    }
    return objeto;
}
console.log(dividirParesEImpares([1,2,3,4,5,6,7,8,9,0]))