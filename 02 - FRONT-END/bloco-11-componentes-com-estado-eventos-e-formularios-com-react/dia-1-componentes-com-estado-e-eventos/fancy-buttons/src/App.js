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

  handleClick1() {
    this.setState((prevState, _props) => ({
      button1: prevState.button1 + 1,
    }));
  }
  handleClick2() {
    this.setState((prevState, _props) => ({
      button2: prevState.button2 + 1,
    }));
  }
  handleClick3() {
    this.setState((prevState, _props) => ({
      button3: prevState.button3 + 1,
    }));
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
