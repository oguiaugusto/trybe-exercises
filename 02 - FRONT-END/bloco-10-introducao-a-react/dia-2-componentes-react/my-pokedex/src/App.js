import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <main>
        <h1 className='title'>Pokedex</h1>
        <Pokedex />
      </main>
    );
  }
}

export default App;
