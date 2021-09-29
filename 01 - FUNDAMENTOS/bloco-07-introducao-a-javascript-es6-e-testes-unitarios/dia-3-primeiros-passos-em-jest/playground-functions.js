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

function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  const sortedArray = array.sort();
  let arrayList = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    let techObject = {
      tech: sortedArray[index],
      name,
    };
    arrayList.push(techObject);
  }
  return arrayList;
}

function hydrate(string) {
  let suggestion = '';
  let findNumbers = /\d+/g;
  let numbers = string.match(findNumbers);
  let glassOfWater = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    let number = 0;
    number = parseInt(numbers[index], 10);
    glassOfWater += number;
  }
  if (glassOfWater > 1) {
    suggestion = `${glassOfWater} copos de água`;
  } else {
    suggestion = `${glassOfWater} copo de água`;
  }
  return suggestion;
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};
