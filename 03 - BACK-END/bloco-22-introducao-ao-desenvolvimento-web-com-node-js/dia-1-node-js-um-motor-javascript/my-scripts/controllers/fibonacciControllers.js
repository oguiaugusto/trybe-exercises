const readline = require('readline-sync');

const info = { tamanho: 0 };

const controller = () => {
  info.tamanho = readline.questionInt('Quantos números você quer gerar na sequência? ')
};

module.exports = { info, controller };
