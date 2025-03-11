import { Estudiante } from "./Estudiante.js";

export const GestorEstudiantes = {
    estudiantes: {},

    crearEstudiante(nombre, edad, nivel) {
        const estudiante = new Estudiante(nombre, edad, nivel);
        this.estudiantes[estudiante.id] = estudiante;
    },

    listarEstudiantes() {
        if (Object.keys(this.estudiantes).length === 0) {
            console.log("No hay estudiantes registrados.");
        } else {
            console.log("\nLista de estudiantes:");
            for (let id in this.estudiantes) {
                console.log(`${id}: ${this.estudiantes[id].nombre}, ${this.estudiantes[id].edad} años, Nivel: ${this.estudiantes[id].nivel}`);
            }
        }
    },

    actualizarEstudiante(id, nuevoNombre, nuevaEdad, nuevoNivel) {
        if (this.estudiantes[id]) {
            let estudiante = this.estudiantes[id];
            estudiante.nombre = nuevoNombre;
            estudiante.edad = nuevaEdad;
            estudiante.nivel = nuevoNivel;
        } else {
            console.log("No se encontró el estudiante.");
        }
    },

    eliminarEstudiante(id) {
        if (this.estudiantes[id]) {
            delete this.estudiantes[id];
        } else {
            console.log("No se encontró el estudiante.");
        }
    }
};