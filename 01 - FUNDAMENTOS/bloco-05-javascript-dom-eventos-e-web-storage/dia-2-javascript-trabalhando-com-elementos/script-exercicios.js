// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// 2. Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionOne = document.createElement('section');
sectionOne.className = 'center-content';
main.appendChild(sectionOne);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let firstP = document.createElement('p');
firstP.innerText = 'Boa tarde. Minha criatividade não se extende a textos.';
sectionOne.appendChild(firstP);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionTwo = document.createElement('section');
sectionTwo.className = 'left-content';
main.appendChild(sectionTwo);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionThree = document.createElement('section');
sectionThree.className = 'right-content';
main.appendChild(sectionThree);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imageOne = document.createElement('img');
imageOne.src = 'https://picsum.photos/200';
imageOne.className = 'small-image';
sectionTwo.appendChild(imageOne);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let numbersArray = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let numbersList = document.createElement('ul');
sectionThree.appendChild(numbersList);
for (let i = 0; i < numbersArray.length; i += 1) {
  let currentNumber = document.createElement('li');
  currentNumber.innerText = numbersArray[i];
  numbersList.appendChild(currentNumber);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 1; i <= 3; i += 1) {
  let h3Tag = document.createElement('h3');
  document.querySelector('.main-content').appendChild(h3Tag);
}

// Mudanças
// 1. Adicione a classe title na tag h1 criada;
document.querySelector('h1').className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
let h3Tags = document.querySelectorAll('h3');
for (let i = 0; i < h3Tags.length; i += 1) {
  h3Tags[i].className = 'description';
}

// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
let mainTag = document.querySelector('.main-content');
mainTag.removeChild(sectionTwo);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section;
sectionThree.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
sectionOne.parentElement.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

