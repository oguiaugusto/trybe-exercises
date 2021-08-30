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

// Exercício 4
function positiveOrNegative(number) {
  let result = "";
  if (number > 0) {
    result = "o número " + number + " é positivo";
  }
  else if (number < 0) {
    result = "o número " + number + " é negativo";
  }
  else {
    result = "o número zero é neutro";
  }
  return result;
}
console.log(positiveOrNegative(0));

// Exercício 5
function trianguloValido(primeiroValorTriangulo, segundoValorTriangulo, terceiroValorTriangulo) {
  let result = "";
  if (primeiroValorTriangulo + segundoValorTriangulo + terceiroValorTriangulo === 180) {
    result = "True. Você tem um triângulo.";
  }
  else if (primeiroValorTriangulo + segundoValorTriangulo + terceiroValorTriangulo < 0) {
    result = "Ângulo Inválido. Tente novamente.";
  }
  else {
    result = "False. Opa, o que seria isso?";
  }
  return result;
}
console.log(trianguloValido(45, 45, 100));

// Exercício 6
function quaisMovimentos(pecaXadrez) {
  let pecaXadrezSwitch = pecaXadrez.toLowerCase();
  let result = "";

  switch (pecaXadrezSwitch) {
    case "torre":
      result = "A Torre se move para frente ou para os lados.";
      break;
    case "cavalo":
      result = "O Cavalo se move em L para qualquer direção.";
      break;
    case "bispo":
      result = "O Bispo se move nas diagonais.";
      break;
    case "rainha":
    case "dama":
      result = "A Dama/Rainha se move para todas as direções (frente, costa, esquerda, direita e diagonais.";
      break;
    case "rei":
      result = "O Rei se move para todas as direções, porém apenas uma casa por vez.";
      break;
    case "peão":
      result = "O Peão se move apenas uma casa para frente e captura a peça pela diagonal. Ele pode se mover duas casas para frente se estiver em sua posição inicial.";
      break;
    default:
      result = "Erro: peça inválida";
  }
  return result;
}
console.log(quaisMovimentos("rei"));

// Exercício 7
function notaEmPorcentagem(nota) {
  let result = "";
  if (nota >= 90) {
    result = "A";
  }
  else if (nota >= 80) {
    result = "B";
  }
  else if (nota >= 70) {
    result = "C";
  }
  else if (nota >= 60) {
    result = "D";
  }
  else if (nota >= 50) {
    result = "E";
  }
  else {
    result = "F";
  }
  return result;
}
console.log(notaEmPorcentagem(12));

// Exercício 8
function algumNumeroPar(a, b, c) {
  let result = "";
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    result = "true";
  }
  else {
    result = "false";
  }
  return result;
}
console.log(algumNumeroPar(54, 45, 4));

// Exercício 9
function algumNumeroImpar(a, b, c) {
  let result = "";
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    result = "true";
  }
  else {
    result = "false";
  }
  return result;
}
console.log(algumNumeroImpar(12, 38, 4));

// Exercício 10
function calculoDoLucro(valorCusto, valorVenda) {
  let result = "";
  const valorCustoTotal = valorCusto + (valorCusto * 20 / 100);
  const lucro = valorVenda - valorCustoTotal
  if (valorCusto >= 0 && valorVenda >= 0) {
    result = ("Lucro de mil produtos:", lucro * 1000);
  }
  else {
    result = "Erro: Seus valores de entrada não podem ser menores que zero";
  }
  return result;
}
console.log(calculoDoLucro(100, 200));

// Exercício 11
function calcularSalarioLiquido(salarioBruto) {
  let aliquotaInss;
  let valorIr;
  let salarioMenosInss;

  if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto / 100 * 8;
    salarioMenosInss = salarioBruto - aliquotaInss;
  }
  else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto / 100 * 9;
    salarioMenosInss = salarioBruto - aliquotaInss;
  }
  else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto / 100 * 11;
    salarioMenosInss = salarioBruto - aliquotaInss;
  }
  else if (salarioBruto > 5189.82) {
    aliquotaInss = 570.88;
    salarioMenosInss = salarioBruto - aliquotaInss;
  }
  else {
  }

  if (salarioMenosInss < 1903.98) {
    valorIr = 0;
  }
  else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
    valorIr = (salarioMenosInss * 0.075) - 142.80;
  }
  else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
    valorIr = (salarioMenosInss * 0.15) - 354.80;
  }
  else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
    valorIr = (salarioMenosInss * 0.225) - 636.13;
  }
  else if (salarioMenosInss > 4664.68) {
    valorIr = (salarioMenosInss * 0.275) - 869.36;
  }
  else {
  }

  let salarioLiquido = salarioMenosInss - valorIr;
  return salarioLiquido;
}
console.log("Salário Líquido:", calcularSalarioLiquido(3000));