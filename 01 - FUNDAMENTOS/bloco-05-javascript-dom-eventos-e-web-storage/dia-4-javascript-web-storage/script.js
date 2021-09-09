// Inputs e Buttons
const inputBgColor = document.getElementById('bg-color-input');
const inputTextColor = document.getElementById('text-color-input');
const inputFontSize = document.getElementById('font-size-input');
const inputLineHeight = document.getElementById('line-height-input');
const inputFontType = document.getElementById('font-type-input');

const buttonBgColor = document.getElementById('bg-color-button');
const buttonTextColor = document.getElementById('text-color-button');
const buttonFontSize = document.getElementById('font-size-button');


// Constantes auxiliares das funções
const body = document.querySelector('body');
const textTitle = document.querySelector('.article-title');
const text = document.querySelectorAll('.text-paragraph');


// Funções
function changeBgColor() {
  let color = inputBgColor.value;
  body.style.backgroundColor = `${color}`;
  inputBgColor.value = '';
}

function changeTextColor() {
  let color = inputTextColor.value;
  textTitle.style.color = `${color}`;
  for (let index = 0; index < text.length; index += 1) {
    text[index].style.color = `${color}`;
  }
  inputTextColor.value = '';
}

function changeFontSize() {
  let size = inputFontSize.value;
  for (let index = 0; index < text.length; index += 1) {
    text[index].style.fontSize = `${size}` + 'px';
  }
  inputFontSize.value = '';
}


// Event Listener
buttonBgColor.addEventListener('click', changeBgColor);
inputBgColor.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeBgColor();
  }
});

buttonTextColor.addEventListener('click', changeTextColor);
inputTextColor.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeTextColor();
  }
});

buttonFontSize.addEventListener('click', changeFontSize);
inputFontSize.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeFontSize();
  }
});