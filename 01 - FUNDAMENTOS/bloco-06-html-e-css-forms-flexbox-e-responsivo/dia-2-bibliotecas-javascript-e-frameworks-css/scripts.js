const selectState = document.getElementById('states');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const postals = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

function setStatesOption() {
  for (let i = 0; i < states.length; i += 1) {
    const stateOption = document.createElement('option');
    stateOption.className = 'state';
    stateOption.value = `${postals[i]}`;
    stateOption.innerText = `${states[i]}`;

    selectState.appendChild(stateOption);
  }
}






window.onload = (e) => {
  setStatesOption();
}
