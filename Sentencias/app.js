/**********************
 * Sentencia if / else
 ********/
/*var nombre = 'Pablo';
var estadoCivil = 'soltero';
var estaCasado = true;

if (estaCasado){
    //si es verdadera la condición
    console.log(nombre + ' esta casado');
}else {
    //si es falsa la condición
    console.log(nombre + ' esta soltero');
}*/

/**********************
 * Sentencia condicionales
 */

/*var nombre = 'Pablo';
var edad = 8;

// edad < 12 es un niño.
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60, es un anciano.

if (edad < 12){
    console.log(nombre + ' es un niño.');
}else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente.');
}else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto.');
}else{
    console.log(nombre + ' es un anciano.');
}*/

/************************
 * Operador ternario
 */

 /*var nombre = 'Pablo';
 var edad = 16;

 edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' es un adolescente');

 /**********************
  * Sentencia Switch
  */

  /*var mes = 8;
  switch(mes){
      case 1:
        console.log('Enero');
        break;
      case 2:
        console.log('Febrero');
        break;
      case 3:
        console.log('Marzo');
        break;
      case 4:
        console.log('Abril');
        break;
      default:
      console.log('Mes no considerado');  
}

/*********************
 * Sentencias repetitivas - Bucles
 * Sentencia For
 * Sentencia While
 * Sentencia Do..While
 */

 /*Sentencia For
for (var i = 10;i >= 1;i--){
  console.log(i);
}*/

/*Sentencia While
var i = 0;
while(i >= 1){
  console.log(i);
  i--;
}*/

/*Sentencia do..while
var i = 12;
do{
  console.log(i);
  i++;
}while(i <= 10)*/

/*******************
 * Valores verdaderos y falsos
 */

 //Valores falsos: undefined, null, 0, ''
 //Valores verdaderos: NOT valores falses

 /*var edad;
 edad = 10;

 if(edad){
   console.log('Variable esta definida');
 }else{
   console.log('Variable no definida');
 }

 //operadores de igualda
if(edad === '10'){
  console.log('Variable con coersión');
}else{
  console.log('Variable sin coersión');
}*/

/****************
 * Ejercicio de sentencias
 */

 /********************
  * Tienes dos alumnos, Pablo y Maria.
  * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 19, 16.
  * María tiene las siguientes notas en el curso de mismo curso: 12, 18, 10.
  * 
  * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
  * superior, e indicar si el alumno esta aprobado, para ello su promedio 
  * debe ser superior a 13.
  */

  var promedioPablo = (14 + 10 + 11)/3;
  var promedioMaria = (12 + 16 + 10)/3;

  //Promedio superior
  if( promedioPablo > promedioMaria ){
    console.log('Pablo tiene el promedio superior.');
  }else if(promedioMaria > promedioPablo){
    console.log('María tiene el promedio superior.');
  }else{
    console.log('Pablo y María tienen promedios iguales.');
  }

  //mostrar si estan aprobados
  for(var i=1;i <= 2;i++){
    if(i === 1){
      console.log('Promedio de pablo:' + promedioPablo);
      if(promedioPablo > 13){
        console.log('Pablo esta aprobado.');
      }else{
        console.log('Pablo esta desaprobado.');
      }
    }else{
      console.log('Promedio de María:' + promedioMaria);
      if(promedioMaria > 13){
        console.log('María esta aprobada.');
      }else{
        console.log('Maria esta desaprobada.');
      }
    }
  }


