function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createCalendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let currentDay = document.createElement('li');
    currentDay.className = 'day';
    currentDay.innerText = dezDaysList[i];
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      currentDay.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      currentDay.classList.add('friday');
    }
    days.appendChild(currentDay);
  }
}
createCalendarDays();

function createHolidayButtons(name) {
  let button = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  button.innerText = `${name}`;
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
}
createHolidayButtons('Feriados');
let holidayButton = document.getElementById('btn-holiday');

let colorChanged = false;
function changeHolidaysColor() {
  let holidays = document.querySelectorAll('.holiday');
  if (colorChanged === false) {
    for (let index = 0; index < holidays.length; index += 1) {
      let currentHoliday = holidays[index];
      currentHoliday.style.backgroundColor = '#6d71bd';
      currentHoliday.style.color = 'white';
      colorChanged = true;
    }
  } else {
    for (let index = 0; index < holidays.length; index += 1) {
      let currentHoliday = holidays[index];
      currentHoliday.style.backgroundColor = 'rgb(238,238,238)';
      currentHoliday.style.color = '';
      colorChanged = false;
    }
  }
}
holidayButton.addEventListener('click', changeHolidaysColor);

function createFridayButton(name) {
  let fridayButton = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  fridayButton.innerText = `${name}`;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
}
createFridayButton('Sexta-Feira');