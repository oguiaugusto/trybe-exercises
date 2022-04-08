const { info, controller } = require('../controllers/fibonacciControllers.js');
const gerarSequenciaDeFibonacci = require('./gerarSequenciaDeFibonacci');

const fibonacci = () => {
  controller();
  const sequenciaDeFibonacci = gerarSequenciaDeFibonacci(info.tamanho);

  if (Number.isInteger(info.tamanho) && info.tamanho > 1) {
    console.log(sequenciaDeFibonacci);
  } else console.log('Por favor, digite um número inteiro maior que 1');
};

fibonacci();
