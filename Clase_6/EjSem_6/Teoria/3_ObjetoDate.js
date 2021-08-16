
let fechaActual = new Date(1992, 6, 9);

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Hoy es " + dia + " de " + meses[mes] + " de " + anio);