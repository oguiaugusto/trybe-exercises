import React, { Component } from 'react';
import { InputTask, ListTasks } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <InputTask />
        <ListTasks />
      </div>
    );
  }
}

export default App;
