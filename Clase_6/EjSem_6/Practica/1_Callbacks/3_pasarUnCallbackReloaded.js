/*
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 
Para esto debemos completar la función procesar. Esta recibe dos parámetros:
1. El primer parámetro es un array.
2. El segundo parámetro que recibe es una función (al que solemos llamar callback).
La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.

Dejamos unas funciones para comprender y probar con el ejemplo:
  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]
*/
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

function agregarHttp(url) {
  return "http://" + url;
}

function procesar(unArray, callback) {
  let sitiosWeb = [];
  for (let i = 0; i < unArray.length; i++) {
    // Se ejecuta la función callback enviando el elemento actual como parámetro
    sitiosWeb.push(callback(unArray[i]));
  }
  return sitiosWeb;
}

/*
let sitioWebCompleto = (unArray, callback) => procesar(unArray, callback);

console.log(sitioWebCompleto(["www.yahoo.com", "www.google.com", "www.git.com"], agregarHttp));
*/