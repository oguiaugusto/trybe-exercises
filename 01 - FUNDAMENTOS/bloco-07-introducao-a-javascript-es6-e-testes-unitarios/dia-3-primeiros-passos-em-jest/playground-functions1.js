// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(string) {
  let arrayStrings = [];
  arrayStrings.push(string[string.length - 1]);
  arrayStrings.push(string[0]);
  let concatStrings = arrayStrings.join(', ');
  return concatStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let totalPoints = winPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);
  let numberOfCounting = 0;
  for (let index in array) {
    if (array[index] === highestNumber) {
      numberOfCounting += 1;
    }
  }
  return numberOfCounting;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))) {
    result = 'cat1';
  } else if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function isDivisibleBy(number) {
  let result = '';
  if ((number % 3) === 0 && (number % 5) === 0) {
    result = 'fizzBuzz';
  } else if ((number % 3) === 0) {
    result = 'fizz';
  } else if ((number % 5) === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(array) {
  let stringArray = [];
  for (let index = 0; index < array.length; index += 1) {
    stringArray.push(isDivisibleBy(array[index]));
  }
  return stringArray;
}

// Desafio 9
// Funções de Encode ->
function encodeCompare(letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < vowels.length; index += 1) {
    if (letter === vowels[index]) {
      let result = (index + 1);
      return result;
    }
  }
  return letter;
}

function encode(string) {
  let encodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    encodedString += encodeCompare(string[index]);
  }
  return encodedString;
}
// <- Funções de Encode

// Funções de Decode ->
function decodedCompare(letter) {
  const numbers = ['1', '2', '3', '4', '5'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < numbers.length; index += 1) {
    if (letter === numbers[index]) {
      let result = vowels[index];
      return result;
    }
  }
  return letter;
}

function decode(string) {
  let decodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    decodedString += decodedCompare(string[index]);
  }
  return decodedString;
}
// <- Funções Decode

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};