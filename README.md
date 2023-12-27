# JavaScript-practica
#Camino de Javascript: 
JavaScript es un lenguaje de programación que sirve para darle interactividad a las páginas web. Se dice que es debilmente tipado ya que no se especifica el tipo del 
valor que es guardado.
Un programa es una serie de instrucciones especiales que le dicen a la computadora que hacer.
Un programa (”código fuente”) es una serie de instrucciones especiales que le dicen a la computadora qué hacer. Se puede escribir código en un archivo, consola 
de desarrollador, entre otros.

Las reglas para escribir código valido, como en un lenguaje normal (aunque en nuestro caso es *lenguaje de computadora),* se conoce como sintaxis.
En lenguaje de computadoras, un grupo de palabras, números y operadores que hacen una tarea especifica es una declaración (statement).
Los **statements** están hechos de una o mas **expresiones.** Una expresión es cualquier referencia a una variable o valor, o un set de variables combinadas con un operador.
Todas esas colecciones de statements tienen que ser **ejecutados** por la computadora (**correr el programa)** por lo que en la computadora se utilizan unas utilidades 
sean **interpretes**  o **compiladores** para traducir el código que vos escribís, en comandos que una computadora puede entender.

En algunos lenguajes de computación las traducciones se hacen desde arriba hacia bajo, linea a linea y cada vez que el programa corre, a esto se le llama **interpretar** 
el código.

En otros lenguajes, las traducciones se hacen con anticipación (**ahead of time)** a eso se lo llama **compilar** el código. Cuando el programa corre después, lo 
que realmente esta corriendo es la compilación.

Si bien se dice que JS es **interpretado** porque se lee de arriba abajo y linea a linea, el motor de javascript (js engine) de cada navegador, en realidad compila 
el programa “on the fly” e inmediatamente corre el código compilado.
## Output

Para poder ver/probar código, podemos usar herramientas como **console.log** y **alert**... estas, no son parte de Javascript, sino que se encuentran en la API que exponen los motores de JavaScript en cada navegador, mediante el scope global en *window*

## Input

Como recibimos información del usuario? Para hacer pruebas podemos utilizar **prompt.** Aunque la manera más común que conocemos todos, es ingresando información en un input de un formulario HTML.


*1-Tipos y variables: 
    string cadena de caracteres : ""; 
    numbers: 0; 
    booleans: true or false; 
    specials : undefined, null, NaN; objects van entre llaves, tienen una key y un valor; 
    array: una forma de almacenar datos[];

-------------------------------------------------------------------------------------------------------------------------------------------------------

*2-Operadores: +, -, *, /, %, a++, ++a, a--, --a, a += b;

-------------------------------------------------------------------------------------------------------------------------------------------------------

*3-comparadores:  ==, ===, !=; !==; null y undefined son false en boolean, arrays y objetos iguales tambien los trata como falsos; &&, ||.

-------------------------------------------------------------------------------------------------------------------------------------------------------

*4-Condicionales, flujos, ciclos: if, for loop. while loop, do while loop, for ... of iterator;

-------------------------------------------------------------------------------------------------------------------------------------------------------

*5-Funciones:Permiten la reutilizacion de codigo
ejemplo: Function nombre (parametro) {
    lo que queremos que haga la funcion
}
funcion nombre();

-------------------------------------------------------------------------------------------------------------------------------------------------------

*6-Objetos: Todo puede ser un objeto. Se puede usar this para referenciar al objeto hoisted. 

-------------------------------------------------------------------------------------------------------------------------------------------------------

*7-Built-in Objects:

-------------------------------------------------------------------------------------------------------------------------------------------------------

*SCOPE
*HOISTING: JavaScript automaticamente lee las funciones primero por lo que si ejecutas la funcion antes de la declaracion aun funciona. Solo sirve con las funciones no con las variables 
*CONVERSION IMPLICITA Y EXPLICITA
*JSON
*Map

-------------------------------------------------------------------------------------------------------------------------------------------------------


Conocimientos Intermedios de JavaScript
* Metodos Nativos: Array (forEach, filter, map), otros, Math(sqrt, ceil)
*Prototipos
*Async/ Promises
*Closures

-------------------------------------------------------------------------------------------------------------------------------------------------------


Conocimientos Avanzados de JavaScript
Paradigmas: funcional, reactivo y de objeto.
Patrones de diseño: observador, decorador, patron de fabrica, patron de modulo y singleton.
