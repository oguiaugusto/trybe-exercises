const fs = require('fs').promises;
const getSimpsonCharacters = require('./getSimpsonCharacters');

const main = async () => {
  const characters = await getSimpsonCharacters();

  const simpsonsFamily = characters.filter(({ id }) => id < 5);

  fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsonsFamily, null, 2))
    .then(() => console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.error(err.message));
};

main();
