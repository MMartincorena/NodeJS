function multiplicar(num1, num2) {
  if (num1 && num2 != 0) {
    return num1 * num2;
  } else {
    return 0;
  }
}

exports.multiplicar = multiplicar;