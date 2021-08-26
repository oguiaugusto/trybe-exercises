// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 20;
const b = 7;
const c = 16;

if (a > b && a > c) {
  console.log("'a' é maior que 'b' e 'c'");
}
else if (b > a && b > c) {
  console.log("'b' é maior que 'a' e 'c'");
}
else {
  console.log("'c' é maior que 'b' e 'a'")
}