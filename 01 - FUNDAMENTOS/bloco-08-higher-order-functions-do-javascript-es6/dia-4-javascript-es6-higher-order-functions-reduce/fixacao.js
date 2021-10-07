// ------> Faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// --> Usando filter e reduce
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const sum = evenNumbers.reduce((result, number) => number += result);
console.log(sum);
// <-- Usando filter e reduce
// --> Usando somente reduce
const sumEven = numbers.reduce((result, number) => (number % 2 === 0) ? result += number : result);
console.log(sumEven);
// <-- Usando somente reduce
// <------ Fim