const readline = require('readline-sync');

const info = {
  peso: 0,
  altura: 0,
};

const controllers = () => {
  info.peso = readline.questionFloat('Qual o seu peso? ');
  info.altura = readline.questionFloat('Qual a sua altura? (cm) ');
};

module.exports = { info, controllers };
