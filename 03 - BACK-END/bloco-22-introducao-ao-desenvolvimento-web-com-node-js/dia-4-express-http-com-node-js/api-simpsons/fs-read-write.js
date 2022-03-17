const fs = require('fs').promises;

const readSimpsons = async () => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf8');
    return JSON.parse(response);
  } catch (err) {
    return null;
  }
};

const writeSimpsons = async (newFile) => {
  try {
    const response = await fs.writeFile('simpsons.json', JSON.stringify(newFile, null, 2));
    return 'File written successfully';
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { readSimpsons, writeSimpsons };
