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

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
// function returnFruitsBasket(basket) {
//   let result = 'Sua cesta possui: ';
//   let fruits = {};
//   let fruitsNames = [];
//   for (let i = 0; i < basket.length; i += 1) {
//     for (let secondI = 0; secondI < basket.length; secondI += 1) {
//       if (basket[i] !== fruitnam[secondI]) {
//         fruitsNames.push(basket[i]);
//       }
//     }
//   }
//   for (let i = 0; i < basket.length; i += 1) {
//     fruits[`${basket[i]}`] += 1;
//     currentNumber = fruits[`${basket[i]}`];
//   }
//   for (let i = 0; i < fruits.length - 1; i += 1) {
//     if (i > fruits.length - 2) {
//       result += (fruits[i] + ' ' + fruitsNames[i] + ' e ');
//     } else {
//       result += (fruits[i] + ' ' + fruitsNames[i]) + ', ';
//     }
//   }
//   result += (fruits[fruits.length - 1]) + ' ' + (fruitsNames[fruitsNames - 1]);
//   return result;
// }
// console.log(returnFruitsBasket(['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']));

// let obj = {};
// obj.hi = 1;
// obj.hi += 2;
// console.log(obj);