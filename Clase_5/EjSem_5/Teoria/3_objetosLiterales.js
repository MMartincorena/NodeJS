let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario;
    }
}

// CONSTRUCTOR - creo un objeto, por eso al nombrarlo lo hago con letra mayuscula (Curso).
function Curso(cantidadDeAlumnos, docentes, horarios){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horarios = horarios;
}

// instancio el objeto, en base a los parametros que se le asignaron.
let cursoDeProgramacion = new Curso(50, ["Martin", "Fernando"], "de 19 a 21:30hs");
let cursoDeMarketing = new Curso(30, ["Pablo", "Manuel"], "de 10 a 12 hs.")

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);



