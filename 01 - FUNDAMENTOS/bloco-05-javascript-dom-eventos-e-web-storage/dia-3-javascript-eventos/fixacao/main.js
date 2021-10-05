const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const header = document.querySelector('header');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function changeElementsClass(event) {
  let currentClass = document.getElementsByClassName('tech');
  currentClass[0].classList.remove('tech');

  event.target.className = 'tech';
}

firstLi.addEventListener('click', changeElementsClass);
secondLi.addEventListener('click', changeElementsClass);
thirdLi.addEventListener('click', changeElementsClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeElementText() {
  let element = document.querySelector('.tech');
  element.innerText = input.value;
}

input.addEventListener('keyup', changeElementText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function redirectToPortfolio() {
  let portfolio = 'https://oguiaugusto.github.io/';
  window.open(portfolio);
}

myWebpage.addEventListener('dblclick', redirectToPortfolio);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeNameColor(event) {
  let currentColor = event.target;
  currentColor.style.color = '#b65c5c';
}

function backNameColor(event) {
  let currentColor = event.target;
  currentColor.style.color = 'white';
}

myWebpage.addEventListener('mouseover', changeNameColor);
myWebpage.addEventListener('mouseout', backNameColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.