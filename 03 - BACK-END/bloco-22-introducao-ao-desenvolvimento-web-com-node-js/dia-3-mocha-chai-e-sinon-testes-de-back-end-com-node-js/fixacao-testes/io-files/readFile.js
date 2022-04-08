const fs = require('fs').promises;

const readFile = async (fileName) => {
  try {
    const content = await fs.readFile(`./${fileName}`, 'utf-8');

    return content;
  } catch (err) {
    return null;
  }
};

readFile('../.gitignore');

module.exports = readFile;
