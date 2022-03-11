const calcularImc = (peso, altura) => peso / Math.pow((altura / 100), 2);

module.exports = calcularImc;