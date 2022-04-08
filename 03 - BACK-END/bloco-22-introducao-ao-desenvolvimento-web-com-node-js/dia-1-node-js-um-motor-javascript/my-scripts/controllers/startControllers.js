const readline = require('readline-sync');

const info = { input: 0 };

const controller = () => {
  info.input = readline.questionInt('Selecione um script: ');
};

module.exports = { info, controller };
