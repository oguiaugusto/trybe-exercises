// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// - Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "rei";
let pecaXadrezSwitch = pecaXadrez.toLowerCase() ;

switch (pecaXadrezSwitch) {
  case "torre":
    console.log("A Torre se move para frente ou para os lados.");
    break;
  case "cavalo":
    console.log("O Cavalo se move em L para qualquer direção.");
    break;
  case "bispo":
    console.log("O Bispo se move nas diagonais.");
    break;
  case "rainha":
  case "dama":
    console.log("A Dama/Rainha se move para todas as direções (frente, costa, esquerda, direita e diagonais.");
    break;
  case "rei":
    console.log("O Rei se move para todas as direções, porém apenas uma casa por vez.");
    break;
  case "peão":
    console.log("O Peão se move apenas uma casa para frente e captura a peça pela diagonal. Ele pode se mover duas casas para frente se estiver em sua posição inicial.");
    break;
  default:
    console.log("Erro: peça inválida")
}