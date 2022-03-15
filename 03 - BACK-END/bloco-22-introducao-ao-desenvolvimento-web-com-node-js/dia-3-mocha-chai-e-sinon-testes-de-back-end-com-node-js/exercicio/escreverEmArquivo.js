const fs = require('fs').promises;

const escreverEmArquivo = async (fileName, content) => {
  try {
    await fs.writeFile(`./${fileName}`, content);
    return 'ok';
  } catch (err) {
    return null;
  }
};

module.exports = escreverEmArquivo;
