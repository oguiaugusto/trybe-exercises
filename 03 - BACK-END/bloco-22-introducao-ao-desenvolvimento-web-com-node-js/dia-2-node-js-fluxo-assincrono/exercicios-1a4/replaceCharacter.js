const fs = require('fs').promises;
const getSimpsonCharacters = require('./getSimpsonCharacters');

const main = async () => {
  const characters = await getSimpsonCharacters('simpsonsFamily.json');

  const replacedCharacters = characters
    .map((c) => (
      c.name === 'Nelson Muntz' ? { ...c, name: 'Maggie Simpson' } : c
    ));

  fs.writeFile('simpsonsFamily.json', JSON.stringify(replacedCharacters, null, 2))
    .then(() => console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.error(err.message));
};

main();
