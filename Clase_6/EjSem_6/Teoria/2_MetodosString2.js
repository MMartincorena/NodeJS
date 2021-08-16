
let notas = [10, 4, 5, 8, 9, 2, 7];
// METODOS UTILIZADOS: .map() - .filter() - .reduce() - .forEach()

/* .map()
Este método recibe una función como parámetro (callback).
Recorre el array y devuelve un nuevo array modificado. Las modificaciones serán aquellas que programemos en nuestra función de
callback.
*/
let notasHastaEl100 = notas.map(function (numero) {
  return numero * 10;
});

console.log(notasHastaEl100);


/* .filter()
Este método también recibe una función como parámetro. Recorre el array y filtra los elementos según una condición que exista en el
callback. Devuelve un nuevo array que contiene únicamente los elementos que hayan cumplido con esa condición. Es decir, que nuestro 
nuevo array puede contener menos elementos que el original.
*/ 
let notasAprobadas = notas.filter(function (numero) {
  return numero >= 7;
});

console.log(notasAprobadas);


/* .reduce()
Este método recorre el array y devuelve un único valor. Recibe un callback que se va a ejecutar sobre cada elemento del array. 
Este, a su vez, recibe dos parámetros: un acumulador y el elemento actual que esté recorriendo.
*/
let sumaNotas = notas.reduce(function (estado, numero) {
  return estado + numero;
});

console.log(sumaNotas);


/* .forEach()
La finalidad de este método es iterar sobre un array. Recibe un callback como parámetro y, a diferencia de los métodos anteriores,
este no retorna nada.
*/
notas.forEach(function (valor, indice) {
  console.log("En la posición " + indice + " tengo el valor " + valor);
});
