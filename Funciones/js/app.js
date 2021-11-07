function bienvenido(){
    console.log("Hola Bienvenido a la seccion de funciones");
}bienvenido();

function bienvenido1(){
    return "Hola Bienvenido a la seccion de funciones con Return";
}
var mensaje = bienvenido1();
console.log(mensaje);


// Partes de una Funcion
// Argumento => Entradas
// Codigo => 
// Salida => return


function cuadradoDeUnNumero(num){
    let resultado = num*num;
    return resultado;
}

let numero = 3;
let valor = cuadradoDeUnNumero(numero);
console.log(valor);
console.log(cuadradoDeUnNumero(7));

// Convierte de Grados Farenheit a Celcius
// c = (f - 32) * 5/9

function convFarACel(grafoFah){
    let celsius = (grafoFah - 32) * 5/9;
    return celsius;
}

let tempUno = convFarACel (32);
let tempDos = convFarACel (50);
console.log(tempUno);
console.log(tempDos);

// Calcular la Edad a partir del dia de nacimiento

function calcularEdad(yearNac){
    return 2021 - yearNac;
}
let edad1 = calcularEdad(1976);
let edad2 = calcularEdad(1982);
let edad3 = calcularEdad(1949);
console.log("La edad la Persona tiene",edad1, "de Edad.");
console.log("La edad la Persona tiene",edad2, "de Edad.");
console.log("La edad la Persona tiene",edad3, "de Edad.");

// Calcular cuantos años faltan para Jubilarme

function calcularEdadJub(yearNacimiento, nombre){    
    return 65 - yearNacimiento;
}
let edad4 = calcularEdadJub(edad1);
console.log("Le faltan",edad4, "años para Jubilarse.");


function calcularEdadJubilacion(yearNac, nombre){
    let edad = calcularEdad(yearNac);
    let yearJubilacion = 65 - edad;
    console.log("A Usted",nombre, "le faltan",edad4, "años para Jubilarse.");
}
calcularEdadJubilacion(1976,"Alejandro");

