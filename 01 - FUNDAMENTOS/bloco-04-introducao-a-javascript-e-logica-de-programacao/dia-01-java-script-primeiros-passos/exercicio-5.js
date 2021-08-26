// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const primeiroValorTriangulo = 45;
const segundoValorTriangulo = 45;
const terceiroValorTriangulo = -100;

if (primeiroValorTriangulo + segundoValorTriangulo + terceiroValorTriangulo === 180) {
  console.log("True. Você tem um triângulo.");
}
else if (primeiroValorTriangulo + segundoValorTriangulo + terceiroValorTriangulo < 0) {
  console.log("Ângulo Inválido. Tente novamente.")
}
else (
  console.log("False. Opa, o que seria isso?")
)