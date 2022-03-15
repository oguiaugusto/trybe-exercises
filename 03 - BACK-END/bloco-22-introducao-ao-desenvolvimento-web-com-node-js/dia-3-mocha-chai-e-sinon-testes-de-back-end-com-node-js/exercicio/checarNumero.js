const checarNumero = (n) => {
  if (n < 0) return 'negativo';
  if (n > 0) return 'positivo';
  return 'neutro';
};

module.exports = checarNumero;
