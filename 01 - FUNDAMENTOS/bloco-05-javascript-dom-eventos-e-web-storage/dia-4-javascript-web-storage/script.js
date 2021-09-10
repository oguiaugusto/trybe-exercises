// Inputs e Buttons
const inputBgColor = document.getElementById('bg-color-input');
const inputTextColor = document.getElementById('text-color-input');
const inputFontSize = document.getElementById('font-size-input');
const inputLineHeight = document.getElementById('line-height-input');
const inputFontType = document.getElementById('font-type-input');

const buttonBgColor = document.getElementById('bg-color-button');
const buttonTextColor = document.getElementById('text-color-button');
const buttonFontSize = document.getElementById('font-size-button');
const buttonLineHeight = document.getElementById('line-height-button');
const buttonFontType = document.getElementById('font-type-button');


// Storage
window.onload = function() {
  loadStorage('backgroundColor', inputBgColor, changeBgColor);
  loadStorage('textColor', inputTextColor, changeTextColor);
  loadStorage('fontSize', inputFontSize, changeFontSize);
  loadStorage('lineHeight', inputLineHeight, changeLineHeight);
  loadStorage('fontType', inputFontType, changeFontFamily);

  function loadStorage(item, input, funct) {
    let getFromStorage = JSON.parse(localStorage.getItem(`${item}`));
    input.value = getFromStorage;
    funct();
  }
}

// Constantes auxiliares das funções
const body = document.querySelector('body');
const textTitle = document.querySelector('.article-title');
const text = document.querySelectorAll('.text-paragraph');


// Funções
function changeBgColor() {
  let color = inputBgColor.value;
  body.style.backgroundColor = `${color}`;
  inputBgColor.value = '';

  localStorage.setItem('backgroundColor', JSON.stringify(color));
}

function changeTextColor() {
  let color = inputTextColor.value;
  textTitle.style.color = `${color}`;
  for (let index = 0; index < text.length; index += 1) {
    text[index].style.color = `${color}`;
  }
  inputTextColor.value = '';

  localStorage.setItem('textColor', JSON.stringify(color));
}

function changeFontSize() {
  let size = inputFontSize.value;
  for (let index = 0; index < text.length; index += 1) {
    text[index].style.fontSize = `${size}` + 'px';
  }
  inputFontSize.value = '';

  localStorage.setItem('fontSize', JSON.stringify(size));
}

function changeLineHeight() {
  let height = inputLineHeight.value;
  for (let index = 0; index < text.length; index += 1) {
    text[index].style.lineHeight = `${height}` + 'px';
  }
  inputLineHeight.value = '';

  localStorage.setItem('lineHeight', JSON.stringify(height));
}

function changeFontFamily() {
  let font = inputFontType.value;
  body.style.fontFamily = `"${font}"` + ', sans-serif';
  inputFontType.value = '';

  localStorage.setItem('fontType', JSON.stringify(font));
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

buttonLineHeight.addEventListener('click', changeLineHeight);
inputLineHeight.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeLineHeight();
  }
});

buttonFontType.addEventListener('click', changeFontFamily);
inputFontType.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeFontFamily();
  }
});