import { Resultados } from './resultados.js';

let resultados = new Resultados();
resultados.agregarEstudiante(888, 60);
resultados.agregarEstudiante(777, 50);
resultados.agregarEstudiante(999, 40);
resultados.agregarEstudiante(333, 90);
resultados.agregarEstudiante(111, 30);
resultados.agregarEstudiante(666, 90);
resultados.agregarEstudiante(444, 48);
resultados.agregarEstudiante(222, 60);

let porcentajeAprobados = resultados.calcularPorcentajeAprobados();
let cedulaMejorEstudiante = resultados.obtenerCedulaMejorEstudiante();

document.getElementById('salida').innerHTML = `
  <h2>Resultados</h2>
  <p>Porcentaje de aprobados: ${porcentajeAprobados.toFixed(2)}%</p>
  <p>Cédula del mejor estudiante: ${cedulaMejorEstudiante}</p>
`;