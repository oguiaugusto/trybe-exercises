// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [4, 9, 8, 3, 2, 7, 1, 5, 6];
// for (let i = 1; i < numbers.length; i += 1) {
//   for (let secondI = 0; secondI < i; secondI += 1) {
//     if (numbers[i] < numbers[secondI]) {
//       let position = numbers[i];
//       numbers[i] = numbers [secondI];
//       numbers[secondI] = position;
//     }
//   }
// }
// console.log(numbers);


// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

// let numbers = [4, 9, 8, 3, 2, 7, 1, 5, 6];
// for (let i = 1; i < numbers.length; i += 1) {
//   for (let secondI = 0; secondI < i; secondI += 1) {
//     if (numbers[i] > numbers[secondI]) {
//       let position = numbers[i];
//       numbers[i] = numbers[secondI];
//       numbers[secondI] = position;
//     }
//   }
// }
// console.log(numbers);


// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];
let result = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
for (let i = 1; i <= numbers.length; i += 1) {
  for (let secondI = (i - 1); secondI < i; secondI += 1) {
    if (i === numbers.length) {
      numbersMultiplied.push(numbers[secondI] * 2)
    }
    else {
      numbersMultiplied.push(numbers[secondI] * numbers[i]);
    }
  }
}

let equalIndexes = 0;
for (let i = 0; i < numbersMultiplied.length; i += 1) {
  if (numbersMultiplied[i] === result[i]) {
    equalIndexes += 1;
  }
}

if (equalIndexes === numbersMultiplied.length && equalIndexes === result.length) {
  for (let i = 0; i < numbersMultiplied.length; i += 1) {
    console.log(numbersMultiplied[i] + " : " + result[i]);
  }
  console.log("Parabéns! Seu array está correto");
}
else {
  console.log("Opa, dá uma olhada melhor no código.");
  console.log("Resultado esperado: " + result);
  console.log("Seu resultado: " + numbersMultiplied);
}