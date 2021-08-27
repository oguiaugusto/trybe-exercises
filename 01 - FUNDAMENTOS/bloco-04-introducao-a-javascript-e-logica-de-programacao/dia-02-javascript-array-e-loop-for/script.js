let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//  - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log(sum / numbers.length);