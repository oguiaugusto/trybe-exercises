const { info, controller } = require('./controllers/startControllers');

const main = () => {
  console.log(
`Scripts disponíveis:

1. Calcular de IMC
2. Calcular velocidade média
3. Jogo de adivinhação 
4. Calcular fatorial
5. Gerar sequência de fibonacci
`
);

  controller();

  if (info.input === 1) require('./services/imc');
  if (info.input === 2) require('./services/velocidade');
  if (info.input === 3) require('./services/sorteio');
  if (info.input === 4) require('./services/fatorial');
  if (info.input === 5) require('./services/fibonacci');
};

main();
