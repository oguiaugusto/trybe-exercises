// -----> Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

const [message, greeting] = saudacoes;
greeting(message);

// -----> A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida);

// -----> O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares);
[...numerosPares] = [...numerosPares.filter((number) => number % 2 === 0)];
console.log(numerosPares);
