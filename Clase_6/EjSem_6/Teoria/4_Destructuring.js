// Destrcturing, sirve para sustraer los datos de un array u objeto sin modificarlos.
//Destructuración de arrays

let cursos = ["Programación", "MKT", "UX", "Data Science", "UX"];

let [programacion, mkt] = cursos;

/*
console.log(programacion);
console.log(premios);
console.lo(mkt);
*/

let persona = {
  nombre: "Carli",
  edad: 26,
  domicilio: "calle 13",
};

//Destructuración de objetos literales

let { nombre, edad } = persona;

console.log(persona);
console.log(nombre);
console.log(edad);
