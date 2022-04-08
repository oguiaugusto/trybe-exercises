const checarNumero = (n) => {
  if (isNaN(n)) return 'o valor deve ser um número';

  if (n < 0) return 'negativo';
  if (n > 0) return 'positivo';
  return 'neutro';
};

module.exports = checarNumero;
