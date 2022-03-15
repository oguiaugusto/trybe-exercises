const readline = require('readline');
const fs = require('fs').promises;

const question = async (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question((text), (answer) => {
      rl.close();
      resolve(answer);
    })
  });
};

const main = async () => {
  const fileName = await question('Qual arquivo você deseja ler? ');

  fs.readFile(fileName, 'utf8')
    .then((r) => console.log(r))
    .catch(() => console.log('Arquivo não existente'));
};

main();
