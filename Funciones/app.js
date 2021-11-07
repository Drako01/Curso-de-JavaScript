/*************
 * Funciones
 *  */
/*function bienvenido(){
    return 'Hola Bienvenido a la sección de funciones';
}
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una función
//entradas(argumento), código, salida(return)

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));

//Función que convierte de grados Fahrenheit a Celsius
// 32F = 0C, 68F = 20C.
// C = (F - 32) * 5/9

function convertirFAHaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}

var tempUno = convertirFAHaCelsius(32);
var tempDos = convertirFAHaCelsius(68);
console.log(tempUno);
console.log(tempDos);
*/

/*function calcularEdad(yearNacimiemto){
    return 2019 - yearNacimiemto;
}

var edad1 = calcularEdad(1990);
var edad2 = calcularEdad(1980);
var edad3 = calcularEdad(1970);
console.log(edad1);
console.log(edad2);
console.log(edad3);

/****************
 * Ejercicio de codificación 3
 * 
 * Calcular cuantos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 * 
 * Solución:
 */

 /*function calcularTiempoJubilacion(yearNacimiemto, nombre){
     var edad = calcularEdad(yearNacimiemto);
     var yearJubilacion = 65 - edad;
     console.log(nombre + ' le faltan ' + yearJubilacion + ' años para su jubilación.');
 }

 calcularTiempoJubilacion(1990,'Pablo');
 calcularTiempoJubilacion(1978, 'José');
*/

/********************
 * Funciones como expresiones
 */
//Argumentos Undefined
/*var nombre; 
var prueba = function(n){
    return 'Hola ' + n;
}
nombre = 'Pablo';
console.log(prueba(nombre));

//Argumentos Nulos

var a;
a = null;
var valorNulo = function(a){
    return a;
}
console.log(valorNulo(a));
*/

//Argumentos por default

/*var sumar = function(a = 5, b = 3, c = 3){
    return a + b + c;
}
console.log(sumar());

//Plantillas de cadenas (template string)
var nombre = 'Pablo';
console.log(`El nombre es: ${nombre}`);

var a = 5;
var b = 10;
//console.log('La suma es:' + (a + b));
console.log(`La suma es : ${a + b}`);*/


/***************
 * Ejercicio 4
 * Implementar una función que nos permita evaluar el 
 * porcentaje de respuestas positivas y negativas de un examen
 * La función debe recibir el nombre, y la cantidad de 
 * respuestas positivas y negativa
 * 
 * La función debe calcular el porcentaje que representa cada
 * tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)
 * 
 * Solución:
 */

 var calcularScore = function(nombre, pos, neg){
     var porPos = (pos / 100) * 100;
     var porNeg = (neg / 100) * 100;
     var score = '';

     if(porPos > 90){
         score = 'A';
     }else if(porPos >= 70){
         score = 'B';
     }else if(porPos >= 45){
         score = 'C';
     }else{
         score = 'D';
     }
     return `${nombre} tiene el score ${score}, Positivas:${porPos}%, Negativas:${porNeg}% `;     
 }

 var resultado = calcularScore('Alejandro', 75, 25);
 console.log(resultado);
