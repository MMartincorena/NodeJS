let persona = {
    nombre : "Martin",
    apellido : 'Martincorena',
    edad : "29",
}

// pasa el objeto persona en una cadena de texto tipo: JSON
let personaJSON = JSON.stringify(persona);


// vuelvo a pasar el codigo JSON a un objeto
let personaOriginal = JSON.parse(personaJSON);

console.log("");

console.log("Cadena de texto JSON");
console.log(personaJSON);

console.log("");
console.log("Objeto original");
console.log(personaOriginal);
console.log("");