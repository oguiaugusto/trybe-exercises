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