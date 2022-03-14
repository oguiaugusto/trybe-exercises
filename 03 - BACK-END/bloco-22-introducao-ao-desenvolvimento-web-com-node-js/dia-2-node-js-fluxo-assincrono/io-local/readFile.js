// const fs = require('fs'); // sem promises
const fs = require('fs').promises;

const file = 'file.txt';

// fs.readFile(file, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${file}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: \n${data}`);
// }); // função sem promise

fs.readFile(file, 'utf8')
  .then((data) => console.log(`Conteúdo do arquivo: \n${data}`))
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${file} \nErro: ${err}`);
    process.exit(1);
  });