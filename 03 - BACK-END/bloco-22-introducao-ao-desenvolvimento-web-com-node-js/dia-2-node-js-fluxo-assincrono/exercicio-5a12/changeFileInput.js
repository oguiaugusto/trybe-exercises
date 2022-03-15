const readline = require('readline');
const fs = require('fs').promises;

const question = async (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question((text), (answer) => {
      rl.close();
      resolve(answer);
    })
  });
};

const saveFile = async (newFile) => {
  const newFileName = await question('Qual o nome do novo arquivo? ');
  fs.writeFile(newFileName, newFile)
    .then(() => console.log('Arquivo salvo com sucesso'))
    .catch((err) => console.error(err));
};

const getWordToReplace = async (fileContent) => {
  const wordToReplace = await question('Qual palavra deseja substituir? ');
  const newWord = await question('Qual a nova palavra? ');

  const newFile = fileContent.split(wordToReplace).join(newWord);

  console.log(`\n${newFile}\n`);
  saveFile(newFile);
};

const getFile = async () => {
  const fileName = await question('Qual arquivo deseja modificar? ');
  
  fs.readFile(fileName, 'utf8')
    .then((r) => getWordToReplace(r))
    .catch(() => console.log('Arquivo não existente'));
};

const main = () => {
  getFile();
}

main();
