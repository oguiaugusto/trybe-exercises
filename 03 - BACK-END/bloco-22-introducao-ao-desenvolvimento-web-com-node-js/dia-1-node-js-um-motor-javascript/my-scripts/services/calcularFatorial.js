const calcularFatorial = (n) => {
  let fatorial = n;
  for (let i = (fatorial - 1); i > 0; i -= 1) {
    fatorial *= i;
  }

  return fatorial;
};

module.exports = calcularFatorial;
