import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    function handleClick() {
      console.log('Hello, world!');
    }
    return <button onClick={handleClick}>Click-me</button>;
  }
}
 
export default App;
