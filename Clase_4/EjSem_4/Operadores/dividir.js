function dividir(num1, num2) {
  if (num1 == 0) {
    return 0;
  } else if (num2 == 0) {
    return console.log("No se puede dividir por cero.");
  } else {
    return num1 / num2;
  }
}

//console.log(dividir(2, 0));

exports.dividir = dividir;