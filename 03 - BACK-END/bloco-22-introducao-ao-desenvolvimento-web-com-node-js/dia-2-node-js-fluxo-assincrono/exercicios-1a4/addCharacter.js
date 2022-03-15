const fs = require('fs').promises;
const getSimpsonCharacters = require('./getSimpsonCharacters');

const main = async () => {
  const characters = await getSimpsonCharacters('simpsonsFamily.json');

  characters.push({ id: '5', name: 'Nelson Muntz' });

  fs.writeFile('simpsonsFamily.json', JSON.stringify(characters, null, 2))
    .then(() => console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.error(err.message));
};

main();
