import React from 'react';
import './App.css';
import Name from './Name';
import Age from './Age';
import Comment from './Comment';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      nameInput: '',
      age: '',
      fruits: '',
      comment: '',
      everythingOk: false,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  handleErrors() {
    const { nameInput, age, fruits, comment, everythingOk } = this.state;

    const errorCases = [
      !nameInput.length,
      !age.length,
      !fruits.length,
      !comment.length,
      !everythingOk,
    ];

    const formularioPreenchido = errorCases.every((error) => error === true);

    this.setState({
      formularioComErros: false,
    });
  }

  render() {
    return (
      <>
        <h1>Formulário qualquer</h1>
        <form>
          <fieldset>
            <legend>Sobre Você</legend>
            <Name value={this.state.nameInput} handleChange={this.handleChange} handleErrors={this.handleErrors} />
            <Age value={this.state.age} handleChange={this.handleChange} handleErrors={this.handleErrors} />
          </fieldset>
          <fieldset>
            <legend>Algumas preferências</legend>
            <div>
              <label htmlFor="fruits">Selecione uma fruta</label>
              <select name="fruits" id="fruits" value={this.state.fruit} onChange={this.handleChange}>
                <option>Banana</option>
                <option>Maçã</option>
                <option>Uva</option>
                <option>Laranja</option>
              </select>
            </div>
            <Comment value={this.state.comment} handleChange={this.handleChange} handleErrors={this.handleErrors} />
          </fieldset>
          <fieldset>
            <legend>Algo a adicionar?</legend>
            <div>
              <label htmlFor="everythingOk">Tudo certo?</label>
              <input type="checkbox" id="everythingOk" name="everythingOk" checked={this.state.everythingOk} onChange={this.handleChange}></input>
            </div>
            <div>
              <label htmlFor="shareFile">Algum arquivo que queira compartilhar?</label>
              <input type="file" id="shareFile" name="shareFile"></input>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
