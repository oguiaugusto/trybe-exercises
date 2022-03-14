const fs = require('fs').promises;

const file = './file2.txt';
const content = "And I'll never let you go\nIf you promise not to fade away\nNever fade away";

// fs.writeFile(file, content, (err) => err ? (
//   console.error(`Erro ao escrever o arquivo: ${err.message}`)
// ) : console.log('Arquivo escrito com sucesso')); // função sem promise

fs.writeFile(file, content, { flag: 'wx' })
  .then(() => console.log('Arquivo escrito com sucesso'))
  .catch((err) => console.error(`Erro ao escrever o arquivo: ${err.message}`));
