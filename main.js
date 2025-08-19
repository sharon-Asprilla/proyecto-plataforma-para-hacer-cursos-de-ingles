//
//const usuarioCorrecto = "admin";
//const contrasenaCorrecta = "1234";
//let intentos = 3;
/*let acceso = false;

while (intentos > 0) {
    let usuario = prompt("Usuario:");
    let contrasena = prompt("Contraseña:");

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        alert("¡Bienvenido!");
        acceso = true;
        break;
    } else {
        intentos--;
        alert("Datos incorrectos. Te quedan " + intentos + " intentos.");
    }
}

if (!acceso) {
    alert("Usuario bloqueado por exceder los intentos.");
} else {
   
    let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes vas a registrar?"));
    let estudiantes = [];

    for (let i = 0; i < cantidadEstudiantes; i++) {
        let nombre = prompt("Nombre del estudiante " + (i + 1) + ":");
        let asignatura = prompt("Asignatura de " + nombre + ":");
        let nota = parseFloat(prompt("Nota de " + nombre + " en " + asignatura + ":"));

        let estudiante = {
            nombre: nombre,
            asignatura: asignatura,
            nota: nota,
            mostrarInfo: function() {
                return `Estudiante: ${this.nombre}, Asignatura: ${this.asignatura}, Nota: ${this.nota}`;
            }
        };

        estudiantes.push(estudiante);
    }

   
    for (let est of estudiantes) {
        console.log(est.mostrarInfo());
    }
}*/

