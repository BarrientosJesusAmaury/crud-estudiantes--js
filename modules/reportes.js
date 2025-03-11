import { GestorEstudiantes } from "./GestorEstudiantes.js";

export const Reportes = {
    promedioPorEstudiante() {
        return GestorEstudiantes.listarEstudiantes().map(e => {
            const calificaciones = Object.values(e.calificaciones);
            const promedio = calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length || 0;
            return { nombre: e.nombre, promedio, area: e.area };
        });
    },

    buscarEstudiante(criterio) {
        return GestorEstudiantes.buscarEstudiante(criterio);
    },

    promedioPorMateria() {
        let materias = { Matematicas: 0, Programacion: 0, Ciencias: 0, Lengua: 0 };
        let totalEstudiantes = GestorEstudiantes.listarEstudiantes().length;

        GestorEstudiantes.listarEstudiantes().forEach(e => {
            materias.Matematicas += e.calificaciones.Matematicas;
            materias.Programacion += e.calificaciones.Programacion;
            materias.Ciencias += e.calificaciones.Ciencias;
            materias.Lengua += e.calificaciones.Lengua;
        });

        return {
            Matematicas: (materias.Matematicas / totalEstudiantes) || 0,
            Programacion: (materias.Programacion / totalEstudiantes) || 0,
            Ciencias: (materias.Ciencias / totalEstudiantes) || 0,
            Lengua: (materias.Lengua / totalEstudiantes) || 0
        };
    }
};