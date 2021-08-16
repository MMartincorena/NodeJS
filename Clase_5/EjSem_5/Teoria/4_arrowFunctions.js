
// Función flecha, cambia la manera de declarar la función
// manera mas simple y sintetizada de escribir un código más limpio


let laMitad = numero => numero/2;


console.log(laMitad(8));


let dividir = (num1, num2) => num1/num2;
console.log(dividir(5,2));


let tengoQueTrabajar = dia => {
    if (dia == "Sábado"|| dia == "Domingo"){
        return 'No tenes que trabajar';
    }else {
        return 'Si Martin, tenes que ir a trabajar'
    }
}


console.log(tengoQueTrabajar("Martes"));
console.log(tengoQueTrabajar("Domingo"));