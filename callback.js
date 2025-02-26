function cuadradoCallback(value,callback){
    //recursivadad: una funcion se invoca a si misma dentro de si  - eso es lo que me generara el callback
    //simulara la asincronia - ese ir y consultar una api externa
setTimeout(() => { //esto simulara el manejo de ajax o al consumo de datos a traves de un API o de archivos externos
callback(value, ()=>{return value*value;});  //callback("valor ingresado","la funcion a ejecutar") 
}, 0 | Math.random()*1000);                  //en ese callback es donde se le dice qué tendrá( o sea que parametros) la funcion callback puesta antes como parametro (al inicio)
  }

cuadradoCallback(3,(value,resultado)=>{
console.log("Inicia Callback");
console.log(`Callback ${value}, ${resultado()}`) //se llama a la funcion anonima que contiene value*value almacenada ahora con el nombre de resultado();
});