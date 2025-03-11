export class Estudiante {
    static ultimoId = 0;

    constructor(nombre, edad, nivel, area, calificaciones) {
        Estudiante.ultimoId++;
        this.id = Estudiante.ultimoId;
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
        this.area = area;
        this.calificaciones = calificaciones || {
            Matematicas: 0,
            Programacion: 0,
            Ciencias: 0,
            Lengua: 0
        };
    }
}