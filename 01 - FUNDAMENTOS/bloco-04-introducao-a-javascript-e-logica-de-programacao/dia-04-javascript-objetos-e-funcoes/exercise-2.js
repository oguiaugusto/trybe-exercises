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