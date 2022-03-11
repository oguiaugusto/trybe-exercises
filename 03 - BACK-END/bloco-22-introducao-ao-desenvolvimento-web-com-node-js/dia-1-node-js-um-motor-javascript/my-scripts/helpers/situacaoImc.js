const situacaoImc = (imc) => {
  switch (true) {
    case imc < 18.5: return 'Abaixo do peso (magreza)';
    case imc >= 18.5 && imc < 25: return 'Peso normal';
    case imc >= 25 && imc < 30: return 'Acima do peso (sobrepeso)';
    case imc >= 30 && imc < 35: return 'Obesidade grau I';
    case imc >= 35 && imc < 40: return 'Obesidade grau II';
    default: return 'Obesidade grau III';
  }
};

module.exports = situacaoImc;