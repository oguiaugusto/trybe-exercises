// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
// const fruit = {
//   fruta: 'banana',
// };

// const setProperty = (object, key, value) => {
//   const newKey = `${key}`;
//   const newValue = `${value}`;
//   object[newKey] = newValue;
//   return object;
// };

// console.log(setProperty(fruit, 'cor', 'amarela'));


// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (object) => {
  const skills = Object.keys(object);
  for (let i = 0; i < skills.length; i += 1) {
    console.log(`${skills[i]}, Nível: ${object[skills[i]]}`);
  }
};

listSkills(student1);
console.log('---');
listSkills(student1);
