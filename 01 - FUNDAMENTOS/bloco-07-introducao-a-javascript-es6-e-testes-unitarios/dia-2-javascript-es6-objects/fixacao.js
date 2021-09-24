// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const fruit = {
  fruta: 'banana',
};

const setProperty = (object, key, value) => {
  const newKey = `${key}`;
  const newValue = `${value}`;
  object[newKey] = newValue;
  return object;
};

console.log(setProperty(fruit, 'cor', 'amarela'));
