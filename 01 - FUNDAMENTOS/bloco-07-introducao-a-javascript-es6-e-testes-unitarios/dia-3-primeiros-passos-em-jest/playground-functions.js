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
  const numbers = string.match(/\d+/g);
  let glass = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    glass += parseInt(numbers[i]);
  }
  if (glass !== 1) {
    return `${glass} copos de água`;
  }
  return '1 copo de água';
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};
