// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

const n = 7;
let asteriscos;
for (let i = 1; i <= n; i += 1) {
  asteriscos = "*";
  for (let secondI = 1; secondI < n; secondI += 1) {
    asteriscos += "*";
  }
  console.log(asteriscos);
}