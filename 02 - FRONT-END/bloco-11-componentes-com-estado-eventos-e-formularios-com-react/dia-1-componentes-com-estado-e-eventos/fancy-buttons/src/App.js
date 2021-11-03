import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log(this);
    console.log('Texto 1');
  }
  handleClick2() {
    console.log(this);
    console.log('TEXTO 2');
  }
  handleClick3() {
    console.log(this);
    console.log('texto 3');
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick1}>Click-me</button>
        <button onClick={this.handleClick2}>Click-me</button>
        <button onClick={this.handleClick3}>Click-me</button>
      </>
    );
  }
}
 
export default App;
