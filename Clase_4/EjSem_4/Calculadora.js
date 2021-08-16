const sumar = require("./Operadores/sumar.js");
const restar = require("./Operadores/restar.js");
const multiplicar = require("./Operadores/multiplicar.js");
const dividir = require("./Operadores/dividir.js");

let n1 = 5;
let n2 = 2;

let suma = (sumar.sumar(n1,n2));
let resta = (restar.restar(n1,n2));
let multiplica = (multiplicar.multiplicar(n1,n2));
let divide = (dividir.dividir(n1,n2));


console.log("");
console.log("");
console.log(`La suma de ${n1} + ${n2} = ${suma}`);
console.log("");
console.log(`La resta de ${n1} - ${n2} = ${resta}`);
console.log("");
console.log(`La multiplicación de ${n1} * ${n2} = ${multiplica}`);
console.log("");
console.log(`La divición de ${n1} / ${n2} = ${divide}`);
console.log("");
console.log("");

