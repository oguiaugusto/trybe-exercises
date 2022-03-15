const fs = require('fs');

const getCharacterById = (id) => new Promise((resolve, reject) => {
  const characters = JSON.parse(fs.readFileSync('simpsons.json', 'utf8'));
  const character = characters.find((c) => c.id == id);

  if (!character) reject(new Error('id não encontrado'));
  resolve(character);
});

const main = async () => {
  getCharacterById(6)
    .then((r) => console.log(r))
    .catch((err) => console.error(err.message));
};

main();
