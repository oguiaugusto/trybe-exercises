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


// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

