// Desafio 10
function techList(array, name) {
  const sortedArray = array.sort();
  let arrayList = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    let techObject = {
      tech: sortedArray[index],
      name,
    };
    arrayList.push(techObject);
  }
  return arrayList;
}

// Desafio 11
// Funções do Desafio 11 ->

// A função abaixo verifica se o número em questão é menor que zero
// ou maior que nove. Para manter o tamanho da linha nos parâmetros,
// ela é nomeada dessa forma pouco explicativa. Onde 'S' significa
// 'Smaller' e 'B', Bigger.
function isSZeroBNine(array, number) {
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    if (number < 0 || number > 9) {
      result = true;
      return result;
    }
  }
  return result;
}

// A função abaixo verifica se o número em questão é menor que zero
// ou maior que nove. Para manter o tamanho da linha nos parâmetros,
// ela é nomeada dessa forma pouco explicativa. Onde 'R' significa 'Repeat'.
function doesRThree(array, number) {
  let numberOfCounts = 0;
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    if (number === array[index]) {
      numberOfCounts += 1;
    }
  }
  if (numberOfCounts > 2) {
    result = true;
    return result;
  }
  return result;
}

function isValidArray(array) {
  let result = true;
  for (let index = 0; index < array.length; index += 1) {
    if (isSZeroBNine(array, array[index]) === true || doesRThree(array, array[index]) === true) {
      result = false;
      return result;
    }
  }
  return result;
}

function structureNumbers(array) {
  let phoneNumber = '';
  phoneNumber += '(';
  for (let index = 0; index <= 1; index += 1) {
    phoneNumber += array[index];
  }
  phoneNumber += ')';
  phoneNumber += ' ';
  for (let index = 2; index <= 6; index += 1) {
    phoneNumber += array[index];
  }
  phoneNumber += '-';
  for (let index = 7; index < array.length; index += 1) {
    phoneNumber += array[index];
  }
  return phoneNumber;
}

function generatePhoneNumber(array) {
  if (array.length === 11 && isValidArray(array) === true) {
    return structureNumbers(array);
  } if (array.length === 11 && isValidArray(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}
// <- Funções do Desafio 11

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < (lineB + lineC) && lineA > (lineB - lineC)) {
    result = true;
    return result;
  }
  return result;
}

// Desafio 13
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
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};