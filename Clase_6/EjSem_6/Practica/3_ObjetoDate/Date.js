/* Date
Date un tiempo.
En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y, utilizándola, debemos imprimir el siguiente mensaje:
"Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es el número del mes y ZZZZ es el número del año. 
Ejemplo de cómo podría verse una fecha con este formato:
                                    "Hoy es el día 0 del mes 4 del año 2019"
Funciones de Date que nos van a ayudar:
- getDate()
- getMonth()
- getFullYear()
*/

let anio = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();

console.log("Día: " + fecha.getDate());
console.log("Hoy es el día " + dia + " del mes " + mes + " del año " + anio);
