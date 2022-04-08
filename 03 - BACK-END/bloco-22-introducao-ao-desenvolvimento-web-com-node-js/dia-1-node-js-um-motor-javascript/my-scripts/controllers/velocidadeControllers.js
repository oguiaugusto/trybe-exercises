const readline = require('readline-sync');

const info = {
  distancia: 0,
  tempo: 0,
};

const controllers = () => {
  info.distancia = readline.questionInt('Qual a distância percorrida em metros? ');
  info.tempo = readline.questionInt('Em quanto tempo essa distância foi percorrida em segundos? ');
};

module.exports = { info, controllers };
