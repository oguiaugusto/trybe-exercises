const { info, controller } = require('./controllers/startControllers');

const main = () => {
  console.log('Scripts disponíveis: \n\n1. Calcular de IMC \n2. Calcular velocidade média \n3. Jogo de adivinhação \n');

  controller();

  if (info.input === 1) require('./services/imc');
  if (info.input === 2) require('./services/velocidade');
  if (info.input === 3) require('./services/sorteio');
};

main();
