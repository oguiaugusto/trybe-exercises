import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      button1: 0,
      button2: 0,
      button3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1(e) {
    this.setState((prevState, _props) => ({
      button1: prevState.button1 + 1,
    }));

    const button = e.target;

    if ((this.state.button1 % 2 - 1) === 0 && this.state.button1 !== 0) {
      button.classList.add('green-button');
    } else {
      button.classList.remove('green-button');
    }

    const bg = window.getComputedStyle(button).getPropertyValue('background-color');
    console.log(`Cor de fundo: ${bg}`);
  }
  handleClick2(e) {
    this.setState((prevState, _props) => ({
      button2: prevState.button2 + 1,
    }));
    
    const button = e.target;

    if ((this.state.button2 % 2 - 1) === 0 && this.state.button2 !== 0) {
      button.classList.add('green-button');
    } else {
      button.classList.remove('green-button');
    }

    const bg = window.getComputedStyle(button).getPropertyValue('background-color');
    console.log(`Cor de fundo: ${bg}`);
  }
  handleClick3(e) {
    this.setState((prevState, _props) => ({
      button3: prevState.button3 + 1,
    }));
    
    const button = e.target;

    if ((this.state.button3 % 2 - 1) === 0 && this.state.button3 !== 0) {
      button.classList.add('green-button');
    } else {
      button.classList.remove('green-button');
    }
    
    const bg = window.getComputedStyle(button).getPropertyValue('background-color');
    console.log(`Cor de fundo: ${bg}`);
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleClick1}>Click-me</button>
          <p>{this.state.button1}</p>
        </div>
        <div>
          <button onClick={this.handleClick2}>Click-me</button>
          <p>{this.state.button2}</p>
        </div>
        <div>
          <button onClick={this.handleClick3}>Click-me</button>
          <p>{this.state.button3}</p>
        </div>
      </>
    );
  }
}
 
export default App;
