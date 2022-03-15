const mathExpression = (n1, n2, n3) => (
  new Promise((resolve, reject) => {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) reject(new Error('Informe apenas números'));

    const result = (n1 + n2) * n3; 
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  })
);

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const main = () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  mathExpression(...randomNumbers)
    .then((r) => console.log(r))
    .catch((err) => console.error(err.message));
};

main();
