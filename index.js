import readline from "readline";
import { GestorEstudiantes } from "./modules/GestorEstudiantes.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n📚 Menú CRUD de Estudiantes");
    console.log("1. Agregar estudiante");
    console.log("2. Listar estudiantes");
    console.log("3. Actualizar estudiante");
    console.log("4. Eliminar estudiante");
    console.log("5. Salir");
    
    rl.question("Elige una opción: ", (opcion) => {
        if (opcion === "1") agregarEstudiante();
        else if (opcion === "2") listarEstudiantes();
        else if (opcion === "3") actualizarEstudiante();
        else if (opcion === "4") eliminarEstudiante();
        else if (opcion === "5") rl.close();
        else {
            console.log("Opción inválida.");
            menu();
        }
    });
}

function agregarEstudiante() {
    rl.question("Nombre: ", (nombre) => {
        rl.question("Edad: ", (edad) => {
            rl.question("Nivel: ", (nivel) => {
                GestorEstudiantes.crearEstudiante(nombre, parseInt(edad), nivel);
                console.log("Estudiante agregado.");
                menu();
            });
        });
    });
}

function listarEstudiantes() {
    GestorEstudiantes.listarEstudiantes();
    menu();
}

function actualizarEstudiante() {
    rl.question("ID del estudiante a actualizar: ", (id) => {
        rl.question("Nuevo nombre: ", (nombre) => {
            rl.question("Nueva edad: ", (edad) => {
                rl.question("Nuevo nivel: ", (nivel) => {
                    GestorEstudiantes.actualizarEstudiante(parseInt(id), nombre, parseInt(edad), nivel);
                    console.log("Estudiante actualizado.");
                    menu();
                });
            });
        });
    });
}

function eliminarEstudiante() {
    rl.question("ID del estudiante a eliminar: ", (id) => {
        GestorEstudiantes.eliminarEstudiante(parseInt(id));
        console.log("Estudiante eliminado.");
        menu();
    });
}

menu();