
//if ternario
// es un if que se escribe solo si hay un true o un false, lo particular es que se hace en una sola linea.
let fruta = 'Man';

// estructura
// declaro variable  =      condición    ?     en caso de true      : en caso de false; 
let resultado        = fruta == 'Manzana'? 'Genial, queria manzana' : 'Shit, quería manzana';
console.log(resultado);


//switch
let semaforo = 'azul';

switch(semaforo){
    case 'verde':
        console.log('Puede pasar');
        break;
    case 'amarillo':
        console.log('Precaución');
    case 'rojo':
        console.log('No cruces');
        break;  
    default:
        console.log('No funciona el semaforo');    
}