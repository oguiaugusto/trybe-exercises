const selectState = document.getElementById('states');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const postals = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

const main = document.querySelector('main');

const submitButton = document.getElementById('sub-button');
const dateInput = document.getElementById('start-date');
const clearDateButton = document.getElementById('clear-date');
const clearAllButton = document.getElementById('clear-all');

const userName = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const city = document.getElementById('city');
const typesOfHome = document.getElementsByClassName('type-radio');
const types = ['Casa', 'Apartamento']
let typeOfHome;
const curriculum = document.getElementById('resume');
const role = document.getElementById('role');

const infos = [userName, email, cpf, address, city, curriculum, role, dateInput];
let isEmpty = false;

const inputsNames = {
  name: 'Nome',
  email: 'Email',
  cpf: 'CPF',
  address: 'Endereço',
  city: 'Cidade',
  resume: 'Currículo',
  role: 'Cargo',
  'start-date': 'Data de Início'
};

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
    } else if (!month.includes(undefined) && dateInput.value.length === 5) {
      dateInput.value += '/';
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

function checkInfoIsEmpty() {
  for (let i = 0; i < typesOfHome.length; i += 1) {
    if (typesOfHome[i].checked) {
      typeOfHome = types[i];
    }
  }
  let result;
  for (let i = 0; i < infos.length; i += 1) {
    isEmpty = false;
    if (infos[i].value === '') {
      isEmpty = true;
      result = infos[i].name;
      return result;
    } else if (typeOfHome === undefined) {
      isEmpty = true;
      result = 'typeOfHome';
    }
  }
  return result;
}

function checkResumeLength() {
  if (curriculum.value.length < 100) {
    const errorMessage = 'Adicione, pelo menos, 100 caractéres ao resumo!';
    return alert(errorMessage);
  }
}

function clearInputs() {
  for (let i = 0; i < infos.length; i += 1) {
    infos[i].value = '';
  }
  typesOfHome[0].checked = false;
  typesOfHome[1].checked = false;
  selectState.value = 'blank';
}

function getLines(line) {
  for (let i = 0; i < typesOfHome.length; i += 1) {
    if (typesOfHome[i].checked) {
      typeOfHome = types[i];
    }
  }
  let text;
  if (line === 1) {
    text = userName.value;
  } else if (line === 2) {
    text = email.value + ' // ' + cpf.value + ' // ' + typeOfHome;
  } else if (line === 3) {
    text = address.value + ', ' + city.value + ' - ' + selectState.value.toUpperCase();
  } else if (line === 4) {
    text = 'Resumo do Currículo: ';
  } else if (line === 5) {
    text = curriculum.value;
  } else if (line === 6) {
    text = 'Cargo: ' + role.value + ' // Data de Início: ' + dateInput.value;
  }
  return text;
}

function deleteOutputForm() {
  if (main.children.length > 2) {
    const outputSec = document.getElementById('output-section');
    while (outputSec.firstChild) {
      const toRemove = outputSec.firstChild;
      outputSec.removeChild(toRemove);
    }
    main.removeChild(outputSec);
  }
}

function outputForm(e) {
  e.preventDefault();
  deleteOutputForm();
  checkInfoIsEmpty();
  checkResumeLength();

  if (isEmpty && checkInfoIsEmpty() !== 'typeOfHome') {
    const missingField = inputsNames[`${checkInfoIsEmpty()}`];
    const errorMessage = `Por favor, preencha o campo ${missingField}`;
    return alert(errorMessage);
  } else if (isEmpty && checkInfoIsEmpty() === 'typeOfHome') {
    const errorMessage = `Por favor, selecione o tipo de moradia`;
    return alert(errorMessage);
  } else if (selectState.value === 'blank') {
    const errorMessage = 'Por favor, selecione um estado';
    return alert(errorMessage);
  } else {
    const outputSection = document.createElement('section');
    outputSection.id = 'output-section';
    main.insertBefore(outputSection, main.lastChild);
  
    const firstContainer = document.createElement('div');
    firstContainer.className = 'output-container';
    firstContainer.id = 'first-container';
  
    const secondContainer = document.createElement('div');
    secondContainer.className = 'output-container';
    secondContainer.id = 'second-container';
  
    for (let i = 1; i <= 6; i += 1) {
      if (i <= 3) {
        const div = document.createElement('div');
        div.className = 'output-line';
        div.innerText = getLines(i);
        firstContainer.appendChild(div);
      } else {
        if (i !== 5) {
          const div = document.createElement('div');
          div.className = 'output-line';
          div.innerText = getLines(i);
          secondContainer.appendChild(div);
        } else {
          const div = document.createElement('div');
          div.className = 'output-box';
          div.innerText = getLines(i);
          secondContainer.appendChild(div);
        }
      }
    }
    outputSection.appendChild(firstContainer);
    outputSection.appendChild(secondContainer);
  }
}

dateInput.addEventListener('keyup', setDateFormat);
dateInput.addEventListener('change', checkDateIsValid);
clearDateButton.addEventListener('click', clearDate);
submitButton.addEventListener('click', outputForm);
clearAllButton.addEventListener('click', (e) => {
  e.preventDefault();
  deleteOutputForm();
  clearInputs();
});


window.onload = () => {
  setStatesOption();
}
