
// Metodo de lenght
let mensaje = 'Gran día para practicar programación';
console.log(mensaje.length);

// Metodo de indexOf ---------------- // cuando el resultado es -1, es porque no existe el dato a buscar, dia != día.
console.log(mensaje.indexOf('dia'));

// Metodo Slice ---------------------- // imprime el grupo de caracteres que este conformado entre los parametros.
console.log(mensaje.slice(0, 24));
console.log(mensaje);

// Metodo Trim ----------------------- // metodo el cual elimina los espacios vacios antes y despues de los textos, no asi los que estan dentro.
console.log(mensaje.trim());

// Metodo Split ---------------------- // metodo el cual cambia el string y lo pasa a array. 
console.log(mensaje.split(" "));

//Metodo Replace --------------------- // reemplaza el primer parametro por el segundo.
console.log(mensaje.replace("programación", "inglés"));

