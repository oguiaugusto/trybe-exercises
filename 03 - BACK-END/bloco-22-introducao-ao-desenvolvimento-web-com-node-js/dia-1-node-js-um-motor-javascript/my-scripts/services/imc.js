const { info, controllers } = require('../controllers/imcControllers');
const calcularImc = require('./calcularImc');
const situacaoImc = require('../helpers/situacaoImc');

const imc = () => {
  controllers();
  const valorImc = calcularImc(info.peso, info.altura);
  console.log(`Seu IMC: ${valorImc.toFixed(2)}, sua situação é ${situacaoImc(valorImc)}`);
};

imc();