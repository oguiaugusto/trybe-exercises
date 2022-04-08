const readline = require('readline-sync');

const info = { numero: 0 };

const controller = () => {
  info.numero = readline.questionInt('Qual número você quer fatorar? ');
};

module.exports = { info, controller };
