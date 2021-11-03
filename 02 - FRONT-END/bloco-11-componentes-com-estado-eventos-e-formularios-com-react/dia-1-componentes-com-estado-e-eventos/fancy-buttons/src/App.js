import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick1() {
    console.log('Texto 1');
  }
  handleClick2() {
    console.log('TEXTO 2');
  }
  handleClick3() {
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
