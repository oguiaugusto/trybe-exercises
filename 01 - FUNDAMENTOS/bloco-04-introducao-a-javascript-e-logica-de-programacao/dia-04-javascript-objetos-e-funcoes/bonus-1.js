// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function romanToDecimal(romanNumber) {
  const converter = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  romanNumber = romanNumber.toLowerCase();
  let sum = 0;
  for (let index = 0; index < romanNumber.length; index += 1) {
    if (converter[romanNumber[index + 1]] > converter[romanNumber[index]]) {
      let currentNumber = (converter[romanNumber[index + 1]] - converter[romanNumber[index]]);
      sum += currentNumber;
      index += 1;
    }
    else {
      sum += converter[romanNumber[index]];
    }
  }
  return sum;
}
console.log(romanToDecimal('MMXXI'));