// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// Exercício 1
function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}
console.log(remainder(150, 2));

// Exercício 2
function biggerThan(a, b) {
  let result = "";
  if (a > b) {
    result = "a é maior que b";
  }
  else {
    result = "b é maior que a";
  }
  return result;
}
console.log(biggerThan(18, 34));

// Exercício 3
function biggerThanAnd(a, b, c) {
  let result = "";
  if (a > b && a > c) {
    result = "'a' é maior que 'b' e 'c'";
  }
  else if (b > a && b > c) {
    result = "'b' é maior que 'a' e 'c'";
  }
  else {
    result = "'c' é maior que 'b' e 'a'";
  }
  return result;
}
console.log(biggerThanAnd(20, 7, 16));