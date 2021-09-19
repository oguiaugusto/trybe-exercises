const selectState = document.getElementById('states');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const postals = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

const outputSection = document.getElementById('output-form');
const subButton = document.getElementById('submit-button');
const clearButton = document.getElementById('reset-button');

const userName = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const state = selectState.value.toUpperCase();
const homeTypes = document.getElementsByName('home-type');
const resume = document.getElementById('resume');
const role = document.getElementById('role');
const startDate = document.getElementById('date');
const roleInfo = document.getElementById('role-info');
let homeType;

function checkRadio() {
  for (let radios in homeTypes) {
    if (homeTypes[radios].checked) {
      homeType = homeTypes[radios]
    }
  }
}

function setStatesOption() {
  for (let i = 0; i < states.length; i += 1) {
    const stateOption = document.createElement('option');
    stateOption.className = 'state';
    stateOption.value = `${postals[i]}`;
    stateOption.innerText = `${states[i]}`;

    selectState.appendChild(stateOption);
  }
}

function getLines(line) {
  checkRadio();

  let lineOutput;
  switch (line) {
    case 1:
      lineOutput = userName.value;
      break;
    case 2:
      lineOutput = `${email.value} // ${cpf.value} // ${homeType.nextElementSibling.innerText}`;
      break;
    case 3:
      lineOutput = `${address.value}, ${city.value} - ${selectState.value.toUpperCase()}`
      break;
    case 4:
      lineOutput = `${resume.value}`;
      break;
    case 5:
      lineOutput = `Cargo: ${role.value} // Data de Início: ${startDate.value}`;
      break;
    case 6:
      lineOutput = `${roleInfo.value}`;
      break;
    default:
  }
  return lineOutput;
}

function clearOutputs() {
  clearButton.click();
}

function outputForm(e) {
  e.preventDefault();
  clearOutputs();

  const firstOutputDiv = document.createElement('div');
  firstOutputDiv.className = 'container';
  firstOutputDiv.style.marginBottom = '40px';

  const secondOutputDiv = document.createElement('div');
  secondOutputDiv.className = 'container';

  const forOrSix = {
    4: 'Resumo do Currículo:',
    6: 'Descrição do Cargo:',
  };

  for (let i = 1; i <= 6; i += 1) {
    if (i <= 3) {
      const line = document.createElement('p');
      line.className = 'output-line';
      line.innerText = getLines(i);

      firstOutputDiv.appendChild(line);
    }
    if (i === 4 || i === 6) {
      const textBox = document.createElement('div');
      textBox.className = 'container';
      const upperText = document.createElement('p');
      upperText.innerText = `${forOrSix[i]}`;
      upperText.className = 'output-line';

      const text = document.createElement('p');
      text.className = 'output-textbox';
      text.style.border = '1px solid black';
      text.style.padding = '5px 10px';
      text.innerText = getLines(i);

      textBox.appendChild(upperText);
      textBox.appendChild(text);

      secondOutputDiv.appendChild(textBox);
    } else if (i === 5) {
      const line = document.createElement('p');
      line.className = 'output-line';
      line.innerText = getLines(i);

      secondOutputDiv.appendChild(line);
    }
  }
  outputSection.appendChild(firstOutputDiv);
  outputSection.appendChild(secondOutputDiv);
}

subButton.addEventListener('click', outputForm);


window.onload = (e) => {
  setStatesOption();
}
