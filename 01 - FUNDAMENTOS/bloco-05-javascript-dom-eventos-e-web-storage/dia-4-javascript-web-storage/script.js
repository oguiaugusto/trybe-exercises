const inputBgColor = document.getElementById('bg-color-input');
const inputTextColor = document.getElementById('text-color-input');
const inputFontSize = document.getElementById('font-size-input');
const inputLineHeight = document.getElementById('line-height-input');
const inputFontType = document.getElementById('font-type-input');

const buttonBgColor = document.getElementById('bg-color-button');

const body = document.querySelector('body');

function changeBgColor() {
  let color = inputBgColor.value;
  body.style.backgroundColor = `${color}`;
  inputBgColor.value = '';
}

buttonBgColor.addEventListener('click', changeBgColor);
inputBgColor.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeBgColor();
  }
});