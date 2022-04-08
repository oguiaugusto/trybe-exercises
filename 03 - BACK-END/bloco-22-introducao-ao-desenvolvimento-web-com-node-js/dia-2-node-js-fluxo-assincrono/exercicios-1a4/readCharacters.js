const fs = require('fs');

const readFilePromise = (file) => new Promise((resolve, reject) => (
  fs.readFile(file, 'utf8', (err, cont) => err ? reject(err) : resolve(cont))
));

const getCharacterNamesAndIds = (characters) => (
  characters.map(({ id, name }) => `${id} - ${name}`)
);

const main = () => {
  readFilePromise('simpsons.json')
    .then((r) => {
      const characters = getCharacterNamesAndIds(JSON.parse(r));
      console.log('Personagens:');
      characters.forEach((c) => console.log(c));
    })
    .catch((err) => console.error(err.message));
};

main();