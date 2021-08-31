// Função espaço entre os exercicios
function spaceBetweenExercises() {
  console.log(" ---===--- ")
}

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verifyPalindrome(word) {
  let backwardLetters = [];
  for (let letter of word) {
    backwardLetters.push(letter);
  }

  backwardLetters.reverse();
  let backwardWord = backwardLetters.join('');

  if (word === backwardWord) {
    return true;
  }
  else {
    return false;
  }
}
console.log(verifyPalindrome('arara'));

spaceBetweenExercises();
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function biggersIndex(array) {
  if (Array.isArray(array) === true && array.length === 0) {
    return "Você precisa inserir algum número no array."
  }
  else if (Array.isArray(array) === true) {
    let biggerNumber = array[0];
    for (let i in array) {
      let currentNumber = array[i];
      if (currentNumber > biggerNumber) {
        biggerNumber = currentNumber;
      }
    }
    return array.indexOf(biggerNumber);
  }
  else {
    return "Você precisa inserir um array."
  }
}
console.log(biggersIndex([2, 3, 6, 7, 10, 1]))

spaceBetweenExercises();
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function smallersIndex(array) {
  if (Array.isArray(array) === true && array.length > 0) {
    let smallerNumber = array[0];
    for (let i in array) {
      let currentNumber = array[i];
      if (currentNumber < smallerNumber) {
        smallerNumber = currentNumber;
      }
    }
    return array.indexOf(smallerNumber);
  }
  else if (Array.isArray(array) === true && array.length === 0) {
    return "Você precisa inserir algum numero no array";
  }
  else {
    return "Você precisa inserir um array"
  }
}
console.log(smallersIndex([2, 4, 6, 7, 10, 0, -3]));

spaceBetweenExercises();
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function moreCharacters(name) {
  if (Array.isArray(name) === true && name.length > 0) {
    let moreCharacters;
    let moreCharactersArray;
    let biggestNOfCharacters = 0;
    for (let index in name) {
      let currentNOfCharacters = 0;
      for (let letters of name[index]) {
        currentNOfCharacters += 1;
      }
      if (currentNOfCharacters > biggestNOfCharacters && currentNOfCharacters !== biggestNOfCharacters) {
        moreCharacters = name[index];
        moreCharactersArray = [moreCharacters]
        biggestNOfCharacters = name[index].length;
      }
      else if (currentNOfCharacters === biggestNOfCharacters) {
        moreCharactersArray.push(name[index]);
      }
    }
    if (moreCharactersArray.length > 1) {
      return moreCharactersArray;
    }
    else {
      return moreCharacters;
    }
  }
  else if (Array.isArray(name) === true && name.length === 0) {
    return "Você precisa inserir algum nome no array";
  }
  else {
    return "Você precisa inserir um array"
  }
}
console.log(moreCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

spaceBetweenExercises();
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function mostRepeatedNumber(numbers) {
  let mostRepeatedNumber;
  let biggestNumberOfRepeats = 0;
  for (let index in numbers) {
    let numberOfRepeats = 0;
    for (let repeats in numbers) {
      if (numbers[index] === numbers[repeats]) {
        numberOfRepeats += 1;
      }
    }
    if (numberOfRepeats > biggestNumberOfRepeats) {
      mostRepeatedNumber = numbers[index];
      biggestNumberOfRepeats = numberOfRepeats;
    }
  }
  return mostRepeatedNumber;
}
console.log(mostRepeatedNumber([2, 3, 2, 5, 8, 2, 3]));

spaceBetweenExercises();
// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function sumOneToN(n) {
  let sum = 0;
  for (let index = 1; index <= n; index += 1) {
    sum += index;
  }
  return sum;
}
console.log(sumOneToN(5));

spaceBetweenExercises();
// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
function verifyWordEnding(word, ending) {
  let matchingLetters = 0;
  for (let index = 1; index <= ending.length; index += 1) {
    if (word[((word.length - 1) - ending.length + index)] === ending[index - 1]) {
      matchingLetters += 1;
    }
  }
  if (matchingLetters === ending.length) {
    return true;
  }
  else {
    return false;
  }
}
console.log(verifyWordEnding('trybe', 'be'));
console.log(verifyWordEnding('joaofernando', 'fernan'));