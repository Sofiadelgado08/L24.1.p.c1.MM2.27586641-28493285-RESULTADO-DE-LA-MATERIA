export class Estudiante {
    constructor(cedula, puntos) {
      this.cedula = cedula;
      this.puntos = puntos;
    }
  
    esAprobado() {
      return this.puntos >= 48;
    }
  }