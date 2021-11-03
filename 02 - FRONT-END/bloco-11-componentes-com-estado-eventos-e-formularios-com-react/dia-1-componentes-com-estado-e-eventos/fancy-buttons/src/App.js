import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    function handleClick1() {
      console.log('Texto 1');
    }
    function handleClick2() {
      console.log('TEXTO 2');
    }
    function handleClick3() {
      console.log('texto 3');
    }
    return (
      <>
        <button onClick={handleClick1}>Click-me</button>
        <button onClick={handleClick2}>Click-me</button>
        <button onClick={handleClick3}>Click-me</button>
      </>
    );
  }
}
 
export default App;
