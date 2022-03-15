const fs = require('fs').promises;

const getSimpsonCharacters = async (fileName = 'simpsons.json') => {
  const characters = await fs
    .readFile(fileName, 'utf8')
    .then((r) => JSON.parse(r))
    .catch((err) => console.error(err));

  return characters;
}

module.exports = getSimpsonCharacters;
