// let miLibroA = {
//     titulo: 'El libro de JavaScript',
//     autor: 'Grover Pablo Vásquez',
//     paginas: 400,
//     publicado: false
// }

// let miLibroB = {
//     titulo: 'Programación en PHP',
//     autor: 'Pablo Vásquez',
//     paginas: 700,
//     publicado: true
// }

// console.log(miLibroA.publicado);
// console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
// miLibroA.paginas = 500;
// console.log(miLibroA.paginas);

// let getResumen = (libro) => {
//     return {
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`
//     }
// }

// let libroAResumen = getResumen(miLibroA);
// let libroBResumen = getResumen(miLibroB);

// console.log(libroBResumen.resumen);
// console.log(libroBResumen.resumenPaginas);

// console.log(libroAResumen.resumen);
// console.log(libroAResumen.resumenPaginas);

//Ejercicio, crear un objeto persona que tenga las siguientes prop:
//nombre, edad, ciudad
//cambiar la edad
//Mostrar datos de la persona

// let persona = {
//     nombre: 'Pablo',
//     edad: 30,
//     ciudad: 'Lima'
// }

// persona.edad = 35;
// console.log(`${persona.nombre} tiene ${persona.edad} edad, y vive en la ciudad de ${persona.ciudad}`);

///////Referencia de objetos//////////

// let persona = {
//     nombre: 'Pablo',
//     edad: '30',
//     sueldo: 1200
// }

// let otraPersona = persona;
// otraPersona.sueldo = 1500;
// console.log(otraPersona);

// let cambiarSueldo = (p, monto) => {
//     p.sueldo = p.sueldo + monto;
//     //console.log(p);
// }

// cambiarSueldo(persona, 500);
// console.log(otraPersona);
// console.log(persona);

////////////Métodos//////////////////

// let persona = {
//    nombre: 'Pablo',
//    edad: 30,
//    sueldo: 1200,
//    metodoPrueba: function(){
//        //console.log('Escribiendo desde el método Prueba');
//        return 'Resultado desde prueba';
//    },
//    cambiarEdad: function(edad){
//         this.edad = this.edad + edad;
//    }

// }

// let result = persona.metodoPrueba();
// console.log(result);
// persona.cambiarEdad(3);
// console.log(persona.edad);

//////////Objeto String///////////////

// let nombre = ' Grover Vásquez ';
// let clave = '12309clave567.e';

// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
// console.log(nombre.trim());

// console.log(clave.includes('clave',5));