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

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
function arrayOfNumbers(vector) {
  let numbers = [];
  let evenNumbers = [];
  let arrayInside = [];
  for (let i in vector) {
    if (Array.isArray(vector[i]) === true) {
      arrayInside = vector[i];
      for (let n in arrayInside) {
        numbers.push(arrayInside[n]);
      }
    } else {
      numbers.push(vector[i]);
    }
  }
  for (let i in numbers) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(arrayOfNumbers([[1, 2], 3, 4, 5, 6, [7,8,9,10]]));