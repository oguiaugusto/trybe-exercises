const fs = require('fs').promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const fileNames = [];

const createFileAll = async () => {
  const filesContent = await Promise.all(
    fileNames.map((file) => fs.readFile(file, 'utf8'))
  );

  fs.writeFile('filesAll.txt', filesContent.join(' '))
    .then(() => console.log('Arquivo escrito com sucesso.'));
};

const writeFiles = () => Promise.all(strings)
  .then((r) => {
    r.forEach((str, i) => {
      const fileName = `file${i + 1}.txt`;
      fileNames.push(fileName);

      fs.writeFile(fileName, str)
        .then(() => console.log('Arquivo escrito com sucesso.'));
    });
      createFileAll();
  })
  .catch((err) => console.error(err));

writeFiles();
