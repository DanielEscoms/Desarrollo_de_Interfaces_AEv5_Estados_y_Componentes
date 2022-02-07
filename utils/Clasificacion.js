export default function sacaClasificacion(imc) {
  let clasificacion = '';
  if (imc < 18.5) {
    clasificacion = 'Peso Insuficiente';
  } else if (imc < 25) {
    clasificacion = 'Normopeso';
  } else if (imc < 27) {
    clasificacion = 'Sobrepeso grado I';
  } else if (imc < 30) {
    clasificacion = 'Sobrepeso grado II (preobesidad)';
  } else if (imc < 35) {
    clasificacion = 'Obesidad de tipo I';
  } else if (imc < 40) {
    clasificacion = 'Obesidad de tipo II';
  } else if (imc < 50) {
    clasificacion = 'Obesidad de tipo III (mórbida)';
  } else if (imc >= 50) {
    clasificacion = 'Obesidad de tipo IV (extrema)';
  } else {
    clasificacion = '';
  }

  return clasificacion;
}
