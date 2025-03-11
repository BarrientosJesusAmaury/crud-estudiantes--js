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
    }
};