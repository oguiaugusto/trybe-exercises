let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//  - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for (let i = 0; i < numbers.length; i += 1) {
  if ((numbers[i] % 2) !== 0) {
    oddNumbers += 1;
  }
}
if (oddNumbers > 0) {
  console.log(oddNumbers);
}
else {
  console.log("Nenhum valor ímpar encontrado")
}