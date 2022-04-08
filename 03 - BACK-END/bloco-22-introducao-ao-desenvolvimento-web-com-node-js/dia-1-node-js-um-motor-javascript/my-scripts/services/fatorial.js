const { info, controller } = require('../controllers/fatorialControllers');
const calcularFatorial = require('./calcularFatorial');

const fatorial = () => {
  controller();
  if (Number.isInteger(info.numero) && info.numero > 0) {
    console.log(`O fatorial de ${info.numero} é ${calcularFatorial(info.numero)}`);
  } else console.log('Por favor, digite um número inteiro maior que 0');
};

fatorial();
