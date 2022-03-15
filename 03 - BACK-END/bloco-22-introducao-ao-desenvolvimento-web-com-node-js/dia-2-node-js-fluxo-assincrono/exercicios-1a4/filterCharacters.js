const fs = require('fs').promises;

const main = async () => {
  const characters = await fs
    .readFile('simpsons.json', 'utf8')
    .then((r) => JSON.parse(r))
    .catch((err) => console.error(err));

  const filteredCharacters = characters.filter(({ id }) => id !== '10' && id !== '6');

  fs.writeFile('simpsons.json', JSON.stringify(filteredCharacters, null, 2))
    .then(() => console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.error(`Erro ao escrever o arquivo: ${err.message}`));
};

main();
