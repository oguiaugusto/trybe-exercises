// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
//  - Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//  - Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

const n = 541;
let divisors = 0;

for (let div = 0; div <= n; div += 1) {
  if (n % div === 0) {
    divisors += 1;
  }
}
if (divisors === 2) {
  console.log(n + " é um número primo");
}
else {
  console.log(n + " não é um número primo")
}