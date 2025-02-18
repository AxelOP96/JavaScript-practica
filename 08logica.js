/**24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

console.log("Ejercicio 24");

const arreglosDistintoOrden = (array=[]) =>{
    const asc = [];
    const desc = [];
    let aux=0;
    for(let i=0; i<array.length-1;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j] > array[j+1]){
                aux = array[j+1];
                array[j+1]= array[j];
                array[j] = aux;
            }
        }
    }
    for(let i=0;i<array.length;i++){
        asc.push(array[i]);
    }
    for(let i=0; i<array.length-1;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j] < array[j+1]){
                aux = array[j];
                array[j]= array[j+1];
                array[j+1] = aux;
            }
        }
    }
    for(let i=0;i<array.length;i++){
        desc.push(array[i]);
    }
    let object = {
        asc,
        desc
    }
    return object;
}
console.log(arreglosDistintoOrden([7, 5,7,8,6]))
console.log("Ejercicio 25");

const sinDuplicados = (array=[]) =>{
    const newArray = [];
    for(let i=0;i<array.length;i++){
        if(i === array.lastIndexOf(array[i])){
            newArray.push(array[i]);
        }
        
    }
    return newArray;
}
console.log(sinDuplicados(["x", 10, "x", 2, "10", 10, true, true]))

console.log("Ejercicio 26");
const promedio = (array=[]) =>{
    let promedio = 0.0;
    for(let i=0; i<array.length;i++){
        promedio+= array[i];
    }
    return parseFloat(promedio/array.length);
}
console.log(promedio([9,8,7,6,5,4,3,2,1,0]))