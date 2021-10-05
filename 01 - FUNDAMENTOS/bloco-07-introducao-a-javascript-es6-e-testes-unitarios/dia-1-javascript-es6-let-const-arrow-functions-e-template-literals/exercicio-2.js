// Exercícios 1 e 2
const fatorial = (num) => {
  let result = num;
  for (let i = num; i >= 1; i -= 1) {
    if (result !== i) {
      result *= i
    }
  }
  return `O fatorial do número ${num} = ${result}`;
}

console.log(fatorial(4));

function longestWord(phrase) {
  const allWords = phrase.split(' ');
  let word = allWords[0];
  for (let i = 0; i < allWords.length; i += 1) {
    if (word.length < allWords[i].length) {
      word = allWords[i];
    }
  }
  return `A palavra mais longa é '${word}'`;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Exercício 4
const replaceX = (string) => {
  let phrase = 'Tryber x aqui!';
  let xIndex;
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] == 'x') {
      xIndex = i;
    }
  }
  const newPhrase = phrase.split('');
  newPhrase.splice(xIndex, 1, `${string}`);
  phrase = newPhrase.join('');
  return phrase;
}

console.log(replaceX('Gui'));

var skills = 'Javascript, HTML, CSS, Flexbox, GitHub';

const concatStrings = (string) => {
  const separateSkills = skills.split(', ');
  separateSkills.sort();
  const mySkills = separateSkills.join(', ');
  return `${string} Minhas cinco principais habilidades são: ${mySkills}`;
}

console.log(concatStrings(replaceX('Gui')));
