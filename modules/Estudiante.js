export class Estudiante {
    static ultimoId = 0;

    constructor(nombre, edad, nivel) {
        Estudiante.ultimoId++; 
        this.id = Estudiante.ultimoId;
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
    }
}