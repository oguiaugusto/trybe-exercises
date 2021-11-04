import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: 0,
      fruit: '',
      comment: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeFruit = this.handleChangeFruit.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  handleChangeFruit(e) {
    this.setState({ fruit: e.target.value });
  }
  handleChangeComment(e) {
    this.setState({ comment: e.target.value });
  }

  render() {
    return (
      <>
        <h1>Formulário qualquer</h1>
        <form>
          <div>
            <label for="name">Insira seu nome</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChangeName} />
          </div>
          <div>
            <label for="age">Insira sua idade</label>
            <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleChangeAge} />
          </div>
          <div>
            <label for="fruits">Selecione uma fruta</label>
            <select name="fruits" id="fruits" value={this.state.fruit} onChange={this.handleChangeFruit}>
              <option>Banana</option>
              <option>Maçã</option>
              <option>Uva</option>
              <option>Laranja</option>
            </select>
          </div>
          <div>
            <label for="comment">Diga algo</label>
            <textarea id="comment" name="comment" rows="4" cols="25" value={this.state.comment} onChange={this.handleChangeComment} ></textarea>
          </div>
        </form>
      </>
    );
  }
}

export default App;
