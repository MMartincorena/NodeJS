const fs = require('fs');

let tareas = JSON.parse(readFileSync('./tareas.json', 'utf-8'));

module.exports = tareas;