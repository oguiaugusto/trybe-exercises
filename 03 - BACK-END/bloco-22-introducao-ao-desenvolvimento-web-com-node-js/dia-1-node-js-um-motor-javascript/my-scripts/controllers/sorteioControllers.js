const readline = require('readline-sync');

const info = { numero: 0 };

const numberInput = () => {
  info.numero = readline.questionInt('Digite um número de 1 a 10: ');
};

const continueInput = () => {
  return readline.keyInYN('\nAdivinhar novamente?');
};

module.exports = { info, numberInput, continueInput };
