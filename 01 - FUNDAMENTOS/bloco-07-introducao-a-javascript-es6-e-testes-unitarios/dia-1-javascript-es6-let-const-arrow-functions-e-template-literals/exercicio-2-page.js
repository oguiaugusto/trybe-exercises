// Exercício 3
const clickMeButton = document.getElementById('click-me');
const counting = document.getElementById('click-counting');

clickMeButton.addEventListener('click', () => {
  let counter = parseInt(`${counting.innerText}`, 10);
  counter += 1;

  counting.innerText = counter;
});