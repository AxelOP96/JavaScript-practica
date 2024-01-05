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

    Para relacionar un documento Javascript desde una página web, igual que antes, utilizaremos la etiqueta <script>, sólo que en este caso, haremos referencia al archivo 
    Javascript con un atributo src (source)
    <script src="js/index.js"></script>
    la etiqueta <script> está situada dentro de la etiqueta <head> de la página, es decir, en la cabecera de metadatos. Esto significa que la página web descargará el
    archivo
    Javascript antes de empezar a dibujar el contenido de la página (etiqueta <body>).
    
    Para poder ver/probar código, podemos usar herramientas como **console.log** y **alert**... estas, no son parte de Javascript, sino que se encuentran en la API que 
    exponen los motores de JavaScript en cada navegador, mediante el scope global en *window*
    console.log()	Muestra la información proporcionada en la consola Javascript.
    console.info()	Equivalente al anterior. Se utiliza para mensajes de información.
    console.warn()	Muestra información de advertencia. Aparece en amarillo.
    console.error()	Muestra información de error. Aparece en rojo.
    console.clear()	Limpia la consola. Equivalente a pulsar ctrl + l o escribir clear().

## Input

Como recibimos información del usuario? Para hacer pruebas podemos utilizar **prompt.** Aunque la manera más común que conocemos todos, es ingresando información en 
un input de un formulario HTML.



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

    Concatenación de texto	a + b	Une el contenido de a con el contenido de b
    Conversión a número (Suma unaria)	+a	Si a no es un número, intenta convertirlo en un número.
    al incluir el operador unario + previo a la variable, forzamos a convertirlo a número (o a su forma de representarse numéricamente).

    Operador Nullish coalescing
    El operador nullish coalescing  (unión nula) es un operador lógico muy similar al operador OR, pero con ciertos matices y cambios. A grandes rasgos, se puede decir que 
    el operador a ?? b devuelve b sólo cuando a es undefined o null. Al contrario que el operador OR, con valores como false, 0 o "", no devuelve b.
    
    Veamoslo con un ejemplo para ver la diferencia con el anterior:
    
    JS
    42 || 50          // 42
    42 ?? 50          // 42 (ambos se comportan igual)
    false || 50       // 50 (false es un valor falsy, devuelve el segundo)
    false ?? 50       // false (la parte izquierda no es null ni undefined, devuelve el primero)
    0 || 50           // 50 (0 es un valor falsy, devuelve el segundo)
    0 ?? 50           // 0 (la parte izquierda no es null ni undefined, devuelve el primero)
    null || 50        // 50 (null es un valor falsy, devuelve el segundo)
    null ?? 50        // 50 (devuelve el segundo)
    undefined || 50   // 50 (undefined es un valor falsy, devuelve el segundo)
    undefined ?? 50   // 50 (devuelve el segundo)

    const data = { ammo: 0 }
    data.ammo || "Sin balas";     // "Sin balas"
    data.ammo ?? "Sin balas";     // 0
    
    const data = {}
    data.ammo || "Sin balas";     // "Sin balas"
    data.ammo ?? "Sin balas";     // "Sin balas"
    
    Ten en cuenta que en el segundo caso, la propiedad ammo es undefined, ya que no está definida.

    Asignación lógica nula
    Este operador es bastante interesante para algunas operaciones muy frecuentes en Javascript. Existen ciertos casos donde, si una variable tiene valores null o 
    undefined (valores nullish) y sólo en esos casos, queremos cambiar su valor. Veamos como se haría sin utilizar la asignación lógica nula y como podríamos resumirlo
    utilizándola:
    
    JS
    // Sin asignación lógica nula
    if (x === null || x === undefined) {
      x = 50;
    }
    
    // Con asignación lógica nula
    x ??= 50;
    
    Recuerda que a ??= b es equivalente a a ?? (a = b). Esto puede ser super útil para simplificar casos como el siguiente:
    const resetConfig = (data) => {
      data.life ??= 100;
      data.level ??= 1;
      return data;
    }
    
    resetConfig({ life: 25, level: 4 });      // { life: 25, level: 4 }
    resetConfig({ life: null, level: 2 });    // { life: 100, level: 2 }
    resetConfig({}); // { life: 100, level: 1 }
    
    Observa que la función resetConfig() obtiene un objeto por parámetro y en el caso de tener una de las propiedades life o level a null o no existir (o valer undefined),
    las reseteará al valor indicado.
    
    Encadenamiento opcional

    Existe un operador muy interesante denominado optional chaining  (operador de encadenamiento opcional). Este operador nos permite acceder a propiedades, aunque 
    su elemento padre no exista, de forma que podamos evitar un error que es bastante frecuente.

    Veámoslo con un ejemplo, para situarnos mejor. Tenemos el siguiente objeto:
    
    JS
    const user = {
      name: "Manz",
      role: "streamer",
      attrs: {
        life: 100,
        power: 25
      }
    }
    
    Si intentamos acceder a una de sus propiedades en el interior de attrs lo haremos sin problema:
    
    JS
    user.attrs.power     // 25
    user.attrs.life      // 100
    
    Sin embargo, vamos a imaginar que la propiedad attrs (y todo su contenido) no existe aún, sino que tenemos un objeto user que solo tiene las propiedades name y role,
    pero que en algún momento de nuestro código esta propiedad attrs se añadirá en nuestro objeto.
    
    Si intentamos acceder a una de sus propiedades sin que la propiedad attrs exista, ocurriría lo siguiente:
    
    JS
    user.attrs.power     // TypeError: Cannot read properties of undefined (reading 'power')
    user.attrs.life      // TypeError: Cannot read properties of undefined (reading 'life')
    
    user.attrs && user.attrs.life   // Evitamos el error (comprobamos si existe attrs antes)
    
    Esto ocurre porque estamos intentando acceder a la propiedad power o life dentro de una propiedad attrs que no está definida, es decir, que es undefined. Dicho de otro
    modo, estamos intentando hacer un undefined.power o un undefined.life.
    
    Para evitar esto, hasta ahora teníamos que utilizar un if condicional, un operador lógico AND o alguna forma similar que comprobara antes que attrs existe realmente, 
    volviendolo bastante engorroso si tenemos múltiples objetos anidados uno dentro de otro. Ahora podemos utilizar el optional chaining, que no es más que añadir una 
    ? antes del punto de la propiedad a la que queremos acceder:
    
    JS
    user.attrs?.power    // undefined
    user.attrs?.life     // undefined
    
    Como puedes ver, ahora podemos hacer el intento de acceso sin que nos lance un error. Nos devuelve undefined porque no está definido, pero podemos acceder de forma
    segura.

    Operador lógico NOT
    El operador lógico NOT es un operador unario que se utiliza para negar un valor, es decir, para invertir su valor . Si una variable vale true, al negarla valdrá false 
    y si una variable vale false, al negarla, valdrá false. Para negar una variable, se precede del símbolo !.
    
    Veamos algunos ejemplos:
    
    JS
    !true        // false
    !false       // true
    !!true       // true
    !!false      // false
    !!!true      // false

    Operador coma
    Quizás, puede parecer el más extraño de todos, ya que no se suele usar demasiado de forma individual, pero en algunos contextos es muy utilizado. El operador coma    
    se utiliza simplemente para realizar varias operaciones o sentencias en una misma linea, separándolas por comas. Veamos un ejemplo muy sencillo:
    
    JS
    // Sin operador coma
    const a = 5;
    const b = 10;
    
    // Con operador coma
    const a = 5, b = 10;

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

*8-Numbers:
    // Notación literal (preferida)
    const number = 4;
    const decimal = 15.8;
    const legibleNumber = 5_000_000;
    
    // Notación con objetos (evitar)
    const number = new Number(4);
    const decimal = new Number(15.8);
    const letter = new Number("A");
    
    Observa que los números con decimales, en Javascript los separamos con un punto ( . ), mientras que de forma opcional, podemos utilizar el guión bajo ( _ ) para separar
    visualmente y reconocer las magnitudes que usamos, teniendo en cuenta que para Javascript es lo mismo:
    
    JS
    5_000_000 === 5000000;    // true
    
    Cualquier parámetro pasado al new Number() que no sea un número (por ejemplo, la "A"), dará como resultado un valor NaN (Not A Number)
    cuando trabajamos con datos numéricos, es posible que ciertos números no se puedan representar exactamente, y no sean tan precisos como nos gustaría. Esto ocurre porque
    se guardan en un formato llamado coma flotante de doble precisión.
    Existe una serie de constantes definidas en relación a este tema, que marcan los límites mínimo o máximo. Veamos cuales son y su significado:

    Constante	                Valor en Javascript	    Descripción
    Number.MAX_VALUE	        ~ 21024	                Valor más grande
    Number.MIN_VALUE	        ~ 5×10-324	            Valor más pequeño
    Number.MAX_SAFE_INTEGER 	253-1	                Valor seguro más grande
    Number.MIN_SAFE_INTEGER 	-(253-1)	            Valor seguro más pequeño
    Number.EPSILON 	            2-52	                Número muy pequeño: ε

    Constante	                Valor en Javascript	Descripción
    Number.POSITIVE_INFINITY	Infinity	        Infinito positivo: +∞
    Number.NEGATIVE_INFINITY	-Infinity	        Infinito negativo: -∞
    
    Representación numérica
    En Javascript tenemos dos formas de representar los números: la notación exponencial (basada en potencias de 10) y la notación de punto fijo (una cantidad de dígitos
    para la parte entera, y otra para la parte decimal).
    
    Podemos cambiar entre ellas utilizando los siguientes métodos:
    
    Método	Descripción
     .toExponential(digits)	Convierte el número a notación exponencial con digits decimales.
     .toFixed(digits)	Convierte el número a notación de punto fijo con digits decimales.
     .toPrecision(size)	Utiliza size dígitos de precisión en el número.

     
    
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
