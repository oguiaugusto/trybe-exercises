const selectState = document.getElementById('states');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const postals = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

const submitButton = document.getElementById('sub-button');
const dateInput = document.getElementById('start-date');
const clearDateButton = document.getElementById('clear-date');

function setStatesOption() {
  for (let i = 0; i < states.length; i += 1) {
    const state = document.createElement('option');
    state.classList.add('state');
    state.value = postals[i];
    state.innerText = states[i];
    selectState.appendChild(state);
  }
}

function setDateFormat() {
  if (isNaN(dateInput.value) !== true || dateInput.value.includes('/')) {
    const day = `${dateInput.value[0]}${dateInput.value[1]}`;
    const month = `${dateInput.value[3]}${dateInput.value[4]}`;
    if (!day.includes(undefined) && dateInput.value.length === 2) {
      dateInput.value += '/';
      console.log(day);
    } else if (!month.includes(undefined) && dateInput.value.length === 5) {
      dateInput.value += '/';
      console.log(month);
    }
  } else {
    alert('Insira uma data válida!');
  }
}

function checkDateIsValid() {
  const day = `${dateInput.value[0]}${dateInput.value[1]}`;
  const month = `${dateInput.value[3]}${dateInput.value[4]}`;
  const year = `${dateInput.value[6]}${dateInput.value[7]}${dateInput.value[8]}${dateInput.value[9]}`;
  if (day < 0 || day > 31) {
    alert('Insira uma data válida!');
    dateInput.value = '';
  } if (month < 0 || month > 12) {
    alert('Insira uma data válida!');
    dateInput.value = '';
  } if (year < 0) {
    alert('Insira uma data válida!');
    dateInput.value = '';
  }
}

function clearDate() {
  dateInput.value = '';
}

dateInput.addEventListener('keyup', setDateFormat);
dateInput.addEventListener('change', checkDateIsValid);
clearDateButton.addEventListener('click', clearDate);

window.onload = () => {
  setStatesOption();
}