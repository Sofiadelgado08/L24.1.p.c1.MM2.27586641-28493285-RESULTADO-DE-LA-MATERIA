import { Estudiante } from './estudiante.js';

export class Resultados {
  constructor() {
    this.estudiantes = [];
  }

  agregarEstudiante(cedula, puntos) {
    this.estudiantes.push(new Estudiante(cedula, puntos));
  }

  calcularPorcentajeAprobados() {
    let aprobados = 0;
    for (let estudiante of this.estudiantes) {
      if (estudiante.esAprobado()) {
        aprobados++;
      }
    }
    return (aprobados / this.estudiantes.length) * 100;
  }

  obtenerCedulaMejorEstudiante() {
    let mejorEstudiante = null;
    for (let estudiante of this.estudiantes) {
      if (mejorEstudiante === null || estudiante.puntos > mejorEstudiante.puntos) {
        mejorEstudiante = estudiante;
      }
    }
    return mejorEstudiante.cedula;
  }
}