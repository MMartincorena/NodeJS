const fc = require('./funcionDeTareas');

let librosArray = JSON.parse(fc);
    
//console.log(process.argv)

    switch(process.argv[2]){
        case "listar": 
        console.log(tareas)
        break;
        
        case undefined: 
        console.log('Atención - Tienes que pasar una acción.')
        break;

        default:
        console.log('No entiendo qué quieres hacer.')
        break;
    }

