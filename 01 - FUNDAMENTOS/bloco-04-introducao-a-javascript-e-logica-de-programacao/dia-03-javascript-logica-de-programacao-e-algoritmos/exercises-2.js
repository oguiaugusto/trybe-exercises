// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

const n = 5;
let asteriscos;
for (let i = 0; i < n; i += 1) {
  asteriscos = "*";
  for (let secondI = 0; secondI < i; secondI += 1) {
    asteriscos += "*"
  }
  console.log(asteriscos);
}