export default function calculaIMC(unPeso, unaAltura) {
  let unPesoEnter = parseInt(unPeso);
  let unaAlturaEnter = parseFloat(unaAltura);
  if (!isNaN(unPesoEnter) && !isNaN(unaAlturaEnter)) {
    if (unaAlturaEnter > 3) {
      unaAlturaEnter = unaAlturaEnter / 100;
    }
    return unPesoEnter / (unaAlturaEnter * unaAlturaEnter);
  } else {
    return NaN;
  }
}
