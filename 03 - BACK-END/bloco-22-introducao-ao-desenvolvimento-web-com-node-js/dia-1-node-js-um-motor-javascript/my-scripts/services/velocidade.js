const { info, controllers } = require('../controllers/velocidadeControllers');
const calcularVelocidade = require('./calcularVelocidade');

const velocidade = () => {
  controllers();
  const velocidadeMedia = calcularVelocidade(info.distancia, info.tempo);
  console.log(`A velocidade média é: ${velocidadeMedia} m/s`);
};

velocidade();
