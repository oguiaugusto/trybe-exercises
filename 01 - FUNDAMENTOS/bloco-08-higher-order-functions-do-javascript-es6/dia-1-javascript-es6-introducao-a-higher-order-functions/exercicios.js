// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const getEmail = (name) => {
  const splitName = name.toLowerCase().split(' ');
  const user = splitName.join('_');
  return `${user}@trybe.com`
};
const getInfos = (name) => {
  const infos = {
    nomeCompleto: name,
    email: getEmail(name),
  };
  return infos;
};
const newEmployees = () => {
  const employees = {
    id1: getInfos('Pedro Guerra'),
    id2: getInfos('Luiza Drumond'),
    id3: getInfos('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees());

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const compareNumbers = (num1, num2) => {
  if (num1 === num2) return true;
  return false;
};

const result = (number, check) => {
  const sortedNumber = Math.floor(Math.random() * 5) + 1;
  if (check(number, sortedNumber)) return 'Parabéns, você ganhou!';
  return 'Tente Novamente';
};

console.log(result(1, compareNumbers));
