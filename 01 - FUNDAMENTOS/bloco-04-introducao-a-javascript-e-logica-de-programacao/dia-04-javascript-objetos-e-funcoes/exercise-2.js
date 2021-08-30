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