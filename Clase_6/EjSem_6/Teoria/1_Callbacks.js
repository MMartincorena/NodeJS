
// Callback - función que se pasa como parámetro de otra función.

//defino las funciones que voy a llamar en el callback
sumar = (num1, num2) => num1 + num2;
restar = (num1, num2) => num1 - num2;
multiplicar = (num1, num2) => num1 * num2;
dividir = (num1, num2) => num1 / num2;


// DEFINO EL CALLBACK
// defino variable = parametros (variables, , , funcion) => funcion(variables)
let calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(18, 3, multiplicar));