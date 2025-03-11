import { Estudiante } from "./Estudiante.js";

export const GestorEstudiantes = {
    estudiantes: {},

    crearEstudiante(nombre, edad, nivel, area, calificaciones) {
        const estudiante = new Estudiante(nombre, edad, nivel, area, calificaciones);
        this.estudiantes[estudiante.id] = estudiante;
    },

    listarEstudiantes() {
        return Object.values(this.estudiantes);
    },

    buscarEstudiante(criterio) {
        return Object.values(this.estudiantes).find(e => e.id === criterio || e.nombre.toLowerCase() === criterio.toLowerCase());
    },

    actualizarEstudiante(id, nuevoNombre, nuevaEdad, nuevoNivel, nuevaArea, nuevasCalificaciones) {
        if (this.estudiantes[id]) {
            let estudiante = this.estudiantes[id];
            estudiante.nombre = nuevoNombre;
            estudiante.edad = nuevaEdad;
            estudiante.nivel = nuevoNivel;
            estudiante.area = nuevaArea;
            estudiante.calificaciones = { 
                Matematicas: nuevasCalificaciones.Matematicas || estudiante.calificaciones.Matematicas,
                Programacion: nuevasCalificaciones.Programacion || estudiante.calificaciones.Programacion,
                Ciencias: nuevasCalificaciones.Ciencias || estudiante.calificaciones.Ciencias,
                Lengua: nuevasCalificaciones.Lengua || estudiante.calificaciones.Lengua
            };
        } 
    },

    eliminarEstudiante(id) {
        delete this.estudiantes[id];
    }
};