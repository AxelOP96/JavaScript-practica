document.body.style.backgroundColor = '#1cf';
let recuerdame = ['miguel', 'coco'];
console.log(recuerdame);
recuerdame.push('juana', 'rodrigo');
console.log(recuerdame);

const header = document.querySelector('h1');
        //Las funciones son pedazos de codigo reutilizables. Seguido al parametro funcion va a estar el nombre que les asignemos a la funcion y despues va a estar dentro de las llaves el cuerpo de la funcion
        var nombre = 'Sacha', edad = 28;
        function imprimirEdad(n, e) {
            console.log(`${n} tiene ${e} años`);
        }

        imprimirEdad(nombre, edad);
        imprimirEdad('vicky', 27);
        imprimirEdad('eric', 24);
        //ALCANCE DE LAS FUNCIONES
/*Hace referencia a cuáles variables puede acceder una funcion y el valor que tienen al momento de invocar la funcion.

Variable global: Variable que no esta definida dentro de una funcion sino por fuera de ella.
Al hacer referencia directa a una variable global dentro de una funcion, podermos modificar su valor, esto se le denomina sideEfect, y esto lo vamos a querer evitar.

Para acceder a la variable global, hacemos referencia al objeto global, en este caso por estar en el browser accedemos con window.nombre

var nombre = 'Cocosette'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}/*

imprimirNombreEnMayusculas() 
El alcance de la siguiente funcion solo es para la variable local que le llega por parametro

function imprimirNombreEnMayusculas1(n) {
    n = n.toLowerCase()
    console.log(n)
}

imprimirNombreEnMayusculas1(nombre)

        function changeText() {
            header.innerText = 'my new text';
            let a = 10,
            b=3,
            c=15;
        let d ='5',
            e = 'my name',
            f = 'is chris';
            console.log(a * 3);
            console.log(a + 1) ;
            console.log();
        }
        var nombre = 'Axel', apellido = 'Leguero';
        var primeraLetraDelNombre = nombre.charAt(0);
        var letraDelNombre = nombre.substr(1, 3);
Pequeño resumen:

Los objetos se definen con {} (llaves) para asignarlo a una variable se hace de esta manera var ejemplo = {}

Los objetos se componen por propiedades y valores, se utiliza ’,' para separar cada propiedad
        //Diferencias entre VAR, LET Y CONST
        function esMayorDeEdad(persona) {
            if (persona.edad > 18) {
                var = mensaje = 'es mayor de edad';
            } else {
                mensaje = 'es menor de edad';
            }
            console.log(mensaje);
        }
        //cuando declaramos variables variables con var conviene hacerlo arriba en la funcion  para que quede claro cuales son las variables que van a existir dentro de la funcion

        var precioDeVino = 200.3;
        //al multiplicar por 3 deberia dar 600.9 pero da mas decimales por lo que para que sea mas exacta la cuenta deberia multiplicarse por 100 y dividirse por 100 y utilizar el math.round que redondea el resultado
        var total = Math.round(precioDeVino * 100/ 3) * 100;
        //para pasar el numero a string y que devuelva 3 decimales usamos el .toFixed indicando los decimales a tomar en cuenta
        var totalStr = total.toFixed(3);
        //para volver leer los decimales usamos parseFloat que transforma el string
        //var total2 = parseFloat();*/

        //do while
        let i = 0;
        do {
            const dog = dogs[i];
            const dogData = document.createElement('div');
            dogData.classList.add('jumbotron', 'text-center');
            dogData.innerText = `${dog.name} is a ${dog.type}`;
            DOMStringList.appendChild(dogData);

            i++;
        } while (i < dogs.length);
        //for of
        for (let dog of dogs) {
        const dogData = document.createElement('div');
        dogData.classList.add('jumbotron', 'text-center');
        dogData.innerText = `${dog.name} is a ${dog.type}`;
        DOMStringList.appendChild(dogData);
        }
