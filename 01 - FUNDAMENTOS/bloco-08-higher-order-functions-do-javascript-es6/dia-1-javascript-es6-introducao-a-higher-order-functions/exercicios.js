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
// console.log(newEmployees());

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

// console.log(result(1, compareNumbers));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// ------> Feito usando forEach()
  // const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  // const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
  // let points = 0;
  // const isCorrect = (item, index) => {
  //   if (item === 'N.A') return;
  //   if (item === RIGHT_ANSWERS[index]) {
  //     points += 1;
  //   } else {
  //     points -= 0.5;
  //   }
  // };
  // const finalPoints = (answers) => {
  //   answers.forEach(isCorrect);
  //   return points;
  // };
  // console.log(finalPoints(STUDENT_ANSWERS));
// <------ Feito usando forEach()

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const isCorrect = (currAnswer, correct) => {
  if (currAnswer === 'N.A') return;
  if (currAnswer === correct) {
    return true;
  } else {
    return false;
  }
};

const finalPoints = (template, answers, check) => {
  let points = 0;
  for (let i = 0; i < template.length; i += 1) {
    if (check(answers[i], template[i]) === undefined) {
      points = points;
    } else if (check(answers[i], template[i])) {
      points += 1;
    } else {
      points -= 0.5;
    }
  }
  return points;
};

console.log(finalPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, isCorrect));
