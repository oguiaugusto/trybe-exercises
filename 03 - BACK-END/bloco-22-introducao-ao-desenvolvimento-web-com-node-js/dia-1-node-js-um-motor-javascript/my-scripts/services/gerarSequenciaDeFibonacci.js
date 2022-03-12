const gerarSequenciaDeFibonacci = (n) => {
  const fibonacciArr = [1];
  for (let i = 1; fibonacciArr.length < n; i += 1) {
    const ult = fibonacciArr[i - 1] || 0;
    const pen = fibonacciArr[i - 2] || 0;
    fibonacciArr.push(ult + pen);
  }

  return fibonacciArr.join(', ');
};

module.exports = gerarSequenciaDeFibonacci;
