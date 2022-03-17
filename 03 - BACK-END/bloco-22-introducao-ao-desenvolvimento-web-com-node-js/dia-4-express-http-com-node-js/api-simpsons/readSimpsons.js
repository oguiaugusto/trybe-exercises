const fs = require('fs').promises;

const readSimpsons = async () => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf8');
    return JSON.parse(response);
  } catch (err) {
    return null;
  }
};

module.exports = readSimpsons;
