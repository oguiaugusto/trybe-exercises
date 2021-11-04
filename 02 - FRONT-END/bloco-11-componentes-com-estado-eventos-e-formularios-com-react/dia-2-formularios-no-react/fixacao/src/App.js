import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      nameInput: '',
      age: 0,
      fruits: '',
      comment: '',
      everythingOk: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <h1>Formulário qualquer</h1>
        <form>
          <fieldset>
            <legend>Sobre Você</legend>
            <div>
              <label for="nameInput">Insira seu nome</label>
              <input type="text" id="nameInput" name="nameInput" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
              <label for="age">Insira sua idade</label>
              <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleChange} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Algumas preferências</legend>
            <div>
              <label for="fruits">Selecione uma fruta</label>
              <select name="fruits" id="fruits" value={this.state.fruit} onChange={this.handleChange}>
                <option>Banana</option>
                <option>Maçã</option>
                <option>Uva</option>
                <option>Laranja</option>
              </select>
            </div>
            <div>
              <label for="comment">Diga algo</label>
              <textarea id="comment" name="comment" rows="4" cols="25" value={this.state.comment} onChange={this.handleChange} ></textarea>
            </div>
          </fieldset>
          <fieldset>
            <legend>Algo a adicionar?</legend>
            <div>
              <label for="everythingOk">Tudo certo?</label>
              <input type="checkbox" id="everythingOk" name="everythingOk" checked={this.state.everythingOk} onChange={this.handleChange}></input>
            </div>
            <div>
              <label for="shareFile">Algum arquivo que queira compartilhar?</label>
              <input type="file" id="shareFile" name="shareFile"></input>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
