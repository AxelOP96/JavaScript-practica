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

Para relacionar un documento Javascript desde una página web, igual que antes, utilizaremos la etiqueta <script>, sólo que en este caso, haremos referencia al archivo Javascript con un atributo src (source)
<script src="js/index.js"></script>
la etiqueta <script> está situada dentro de la etiqueta <head> de la página, es decir, en la cabecera de metadatos. Esto significa que la página web descargará el archivo Javascript antes de empezar a dibujar el contenido de la página (etiqueta <body>).

Para poder ver/probar código, podemos usar herramientas como **console.log** y **alert**... estas, no son parte de Javascript, sino que se encuentran en la API que exponen los motores de JavaScript en cada navegador, mediante el scope global en *window*
console.log()	Muestra la información proporcionada en la consola Javascript.
console.info()	Equivalente al anterior. Se utiliza para mensajes de información.
console.warn()	Muestra información de advertencia. Aparece en amarillo.
console.error()	Muestra información de error. Aparece en rojo.
console.clear()	Limpia la consola. Equivalente a pulsar ctrl + l o escribir clear().

## Input

Como recibimos información del usuario? Para hacer pruebas podemos utilizar **prompt.** Aunque la manera más común que conocemos todos, es ingresando información en un input de un formulario HTML.



*1-Tipos y variables: 
    string cadena de caracteres : ""; 
    numbers: 0; 
    BigInt: valor numerico grande;
    boolean: true or false; 
    specials : undefined, null, NaN; objects van entre llaves, tienen una key y un valor; 
    array: una forma de almacenar datos[];
    function: Función (función guardada en una variable);
    Symbol:Símbolo (valor único);
    Object:Objeto (estructura más compleja);

    Hay varias formas de saber que tipo de dato tiene una variable en Javascript:

    Utilizando typeof()
    Si tenemos dudas, podemos utilizar la función typeof, que nos devuelve el tipo de dato de la variable que le pasemos por parámetro. Veamos que nos devuelve 
    typeof() sobre las variables del ejemplo anterior:

    JS
    console.log(typeof text);       // "String"
    console.log(typeof number);     // "Number"
    console.log(typeof boolean);    // "Boolean"
    console.log(typeof notDefined); // undefined

     La función typeof() no nos servirá para variables con tipos de datos más complejos, ya que siempre los mostrará como object. Es mejor utilizar constructor.name.
     typeof() resulta insuficiente porque en tipos de datos más avanzados simplemente nos indica que son objetos. Con constructor.name podemos obtener el tipo 
     de constructor que se utiliza.
    console.log(text.constructor.name);       // String
    console.log(number.constructor.name);     // Number
    console.log(boolean.constructor.name);    // Boolean
    console.log(notDefined.constructor.name); // ERROR, sólo funciona con variables definidas
     
-------------------------------------------------------------------------------------------------------------------------------------------------------

*2-Operadores:
    Aritméticos: Operadores para realizar operaciones matemáticas.
    Asignación: Operadores para guardar información en variables.
    Unarios: Operadores que se utilizan con un sólo operando.
    Comparación: Operadores para realizar comprobaciones.
    Binarios: Operadores a bajo nivel (a nivel de bits).

    los operadores aritméticos son los operadores que utilizamos para realizar operaciones matemáticas básicas
    +, -, *, /, %, **
    los operadores de asignación nos permiten asignar información a diferentes constantes o variables a través del símbolo =, lo cuál es bastante lógico pues así lo 
    hacemos en matemáticas.
    a = b, a += b, a-=b, a /= b, a *= b, a **= b, a %= b.
    No obstante, también existen ciertas contracciones relacionadas con la asignación que nos permiten realizar operaciones de una forma más compacta.

    Los operadores unarios son aquellos que en lugar de tener dos operandos, como los anteriores, sólo tienen uno. Es decir, se realizan sobre un sólo valor almacenado 
    en una variable.
    a++, ++a, a--, --a, -a.
    Los operadores de comparación son aquellos que utilizamos en nuestro código (generalmente, en el interior de un if, aunque no es el único sitio donde 
    podemos utilizarlos) para realizar comprobaciones. Estas expresiones de comparación devuelven un  booleano con un valor de true o false.
    a == b, a != b, a > b, a >= b, a < b, a <= b, a === b, a !== b.

    operadores a nivel de bit. Se trata de una serie de operadores que nos permiten realizar operaciones básicas trabajando a nivel binario, donde los operandos solo 
    pueden tomar valores de 0 o 1:
    Operador AND	a & b	Devuelve 1 si ambos operandos son 1.
    Operador OR	a | b	Devuelve 1 si al menos un operando es 1.
    Operador XOR (OR exclusivo)	a ^ b	Devuelve 1 si ambos operandos son diferentes.
    Operador NOT (unario)	~a	Invierte los bits del operando (por ejemplo, 000101 pasa a 111010). Trunca a 32 bits.
    Operador LEFT SHIFT	a << b	Desplazamiento de bits hacia la izquierda. Ej: 11 (3) pasa a 110 (6).
    Operador RIGHT SHIFT	a >> b	Desplazamiento de bits hacia la derecha. Ej: 11 (3) pasa a 1 (1).
    Operador RIGHT SHIFT sin signo	a >>> b	Desplazamiento de bits hacia la derecha, como un operador sin signo.

    

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

    Tipos de funciones:
    Hay varias formas de crear funciones en Javascript: por declaración (la más usada por principiantes), por expresión (la más habitual en programadores con experiencia) 
    o mediante constructor de objeto (no recomendada):
    
     function nombre(p1, p2...) { }	Crea una función mediante declaración.
     
     var nombre = function(p1, p2...) { }	Crea una función mediante expresión.
     
     new Function(p1, p2..., code);	Crea una función mediante un constructor de objeto.

     Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo
     referencia a ella cada vez que queramos utilizarlas.
     // Función anónima "saludo"
    const saludo = function () {
      return "Hola";
    };
    
    saludo; // ƒ () { return 'Hola'; }
    saludo(); // 'Hola'
    La diferencia fundamental entre las funciones por declaración y las funciones por expresión es que estas últimas sólo están disponibles a partir de la inicialización 
    de la variable. Si «ejecutamos la variable» antes de declararla, nos dará un error.

    Callbacks
    Ahora que conocemos las funciones anónimas, podremos comprender más fácilmente como utilizar callbacks (también llamadas funciones callback o retrollamadas). A 
    grandes rasgos, un callback (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de 
    forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función:
    
    JS
    // fB = Función B
    const fB = function () {
      console.log("Función B ejecutada.");
    };
    
    // fA = Función A
    const fA = function (callback) {
      callback();
    };
    
    fA(fB);

    Esto nos podría permitir crear varias funciones para utilizar a modo de callback y reutilizarlas posteriormente con diferentes propósitos. De hecho, los callbacks 
    muchas veces son la primera estrategia que se suele utilizar en Javascript para trabajar la asincronía:
    
    JS
    // fB = Función B (callback)
    const fB = function () {
      console.log("Función B ejecutada.");
    };
    
    // fError = Función Error (callback)
    const fError = function () {
      console.error("Error");
    };
    
    // fA = Función A
    const fA = function (callback, callbackError) {
      const n = ~~(Math.random() * 5);
      if (n > 2) callback();
      else callbackError();
    };
    
    fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no
    
    Viendo este ejemplo, podemos planear ejecutar la función fA() cambiando los callbacks según nos interese, sin necesidad de crear funciones con el mismo código repetido 
    una y otra vez. Además, en el caso de que las funciones callbacks sean muy cortas, muchas veces utilizamos directamente la función anónima, sin necesidad de guardarla 
    en una variable previamente:

    JS
    // fA = Función A
    const fA = function (callback, callbackError) {
      const n = ~~(Math.random() * 5);
      if (n > 2) callback();
      else callbackError();
    };
    
    fA(
      function () {
        console.log("Función B ejecutada.");
      },
      function () {
        console.error("Error");
      }
    );
    
    Aunque, como se puede ver, se suele evitar para facilitar la legibilidad del código, y sólo se utiliza en casos muy específicos donde estás seguro que no vas a 
    reutilizar la función callback o no te interesa guardarla en una variable.

    Funciones autoejecutables
    Pueden existir casos en los que necesites crear una función y ejecutarla sobre la marcha. En Javascript es muy sencillo crear funciones autoejecutables. Básicamente, 
    sólo tenemos que envolver entre paréntesis la función anónima en cuestión (no necesitamos que tenga nombre, puesto que no la vamos a guardar) y luego, ejecutarla:
    
    JS
    // Función autoejecutable
    (function () {
      console.log("Hola!!");
    })();
    
    // Función autoejecutable con parámetros
    (function (name) {
      console.log(`¡Hola, ${name}!`);
    })("Manz");
    
    De hecho, también podemos utilizar parámetros en dichas funciones autoejecutables. Observa que sólo hay que pasar dichos parámetros al final de la función
    autoejecutable.
    
    Ten en cuenta, que si la función autoejecutable devuelve algún valor con return, a diferencia de las funciones por expresión, en este caso lo que se almacena en la 
    variable es el valor que devuelve la función autoejecutada:
    
    JS
    const f = (function (name) {
      return `¡Hola, ${name}!`;
    })("Manz");
    
    f; // '¡Hola, Manz!`
    typeof f; // 'string'

    Clausuras
    Las clausuras o cierres, es un concepto relacionado con las funciones y los ámbitos que suele costar comprender cuando se empieza en Javascript. Es importante tener 
    las bases de funciones claras hasta este punto, lo que permitirá entender las bases de una clausura.
    
    A grandes rasgos, en Javascript, una clausura o cierre se define como una función que «encierra» variables en su propio ámbito (y que continúan existiendo aún 
    habiendo terminado la función). Por ejemplo, veamos el siguiente ejemplo:
    
    JS
    // Clausura: Función incr()
    const incr = (function () {
      let num = 0;
      return function () {
        num++;
        return num;
      };
    })();
    
    typeof incr; // 'function'
    incr(); // 1
    incr(); // 2
    incr(); // 3

    Tenemos una función anónima que es también una función autoejecutable. Aunque parece una función por expresión, no lo es, ya que la variable incr está guardando lo 
    que devuelve la función anónima autoejecutable, que a su vez, es otra función diferente.

    La «magia» de las clausuras es que en el interior de la función autoejecutable estamos creando una variable num que se guardará en el ámbito de dicha función, por lo 
    tanto existirá con el valor declarado: 0.
    
    Por lo tanto, en la variable incr tenemos una función por expresión que además conoce el valor de una variable num, que sólo existe dentro de incr. Si nos fijamos en 
    la función que devolvemos, lo que hace es incrementar el valor de num y devolverlo. Como la variable incr es una clausura y mantiene la variable en su propio ámbito,
    veremos que a medida que ejecutamos incr(), los valores de num (que estamos devolviendo) conservan su valor y se van incrementando.

    Arrow functions 
    Las Arrow functions, funciones flecha o «fat arrow» son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6. Básicamente, se trata 
    de reemplazar eliminar la palabra function y añadir => antes de abrir las llaves:
    
    JS
    const func = function () {
      return "Función tradicional.";
    };
    
    const func = () => {
      return "Función flecha.";
    };

    Sin embargo, las funciones flechas tienen algunas ventajas a la hora de simplificar código bastante interesantes:

    Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
    Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
    En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
    En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
    En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
    Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).

    Ámbito léxico de this
    Aunque aún no la hemos utilizado, una de las principales diferencias de las funciones flecha respecto a las funciones tradicionales, es el valor de la palabra 
    clave this, que no siempre es la misma.
    
    Por ejemplo, si utilizamos una función de forma global en nuestro programa, no notaremos ninguna diferencia:
    
    JS
    // Si son funciones globales
    const a = function () {
      console.log(this);
    };
    const b = () => {
      console.log(this);
    };
    
    a(); // Window
    b(); // Window
    
    Sin embargo, si utilizamos una función en el interior de un objeto, como suele ser el caso más habitual, si encontraremos diferencias. Observa que en la 
    primera función, donde se utiliza una función tradicional, el this devuelve el objeto padre de la función.
    
    Por otro lado, en la segunda función, donde se utiliza una función flecha, el this no devuelve el objeto padre de la función, sino que devuelve Window.

    padre = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

padre.a(); // padre
padre.b(); // Window

Esta es una diferencia clave que hay que tener bien en cuenta a la hora de trabajar con las funciones flecha. Una buena práctica es utilizar funciones tradicionales 
como las funciones de primer nivel y, luego, en su interior o en callbacks, utilizar funciones flecha.
    
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
