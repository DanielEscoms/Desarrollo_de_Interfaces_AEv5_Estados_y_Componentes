export default function sacaColor(imc) {
  let color = '';
  if (imc < 27) {
    color = 'green';
  } else if (imc < 40) {
    color = 'orange';
  } else if (imc >= 40) {
    color = 'red';
  } else {
    color = 'black';
  }

  return color;
}
