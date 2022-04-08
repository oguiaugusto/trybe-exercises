const { info, numberInput, continueInput } = require('../controllers/sorteioControllers');
const gerarNumeroAleatorio = require('./gerarNumeroAleatorio');

const continueScript = () => (continueInput()) ? sorteio() : console.log('\nAté a próxima!');

const sorteio = () => {
  numberInput();
  const numeroGerado = gerarNumeroAleatorio();

  if (info.numero < 0 || info.numero > 10) {
    console.log('\nPor favor, digite um número entre 0 e 10');
  } else if (info.numero === numeroGerado) {
    console.log('\nParabéns, número correto!');
    continueScript();
  } else {
    console.log(`\nOpa, não foi dessa vez. O número era ${numeroGerado}`);
    continueScript();
  }
};

sorteio();
