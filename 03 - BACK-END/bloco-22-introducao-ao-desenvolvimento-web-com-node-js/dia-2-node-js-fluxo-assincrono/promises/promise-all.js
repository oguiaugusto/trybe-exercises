const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then((responses) => {
    const fileSizeSum = responses.reduce((acc, r) => acc + r.byteLength, 0);
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);

    console.log(`\n${responses[0].toString('utf8')}`);
    console.log(`\n${responses[1].toString('utf8')}`);
    console.log(`\n${responses[2].toString('utf8')}`);
  })
  .catch((err) => console.error(`Erro ao ler arquivos: ${err.message}`));
