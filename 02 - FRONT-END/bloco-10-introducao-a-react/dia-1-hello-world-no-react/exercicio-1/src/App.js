import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const tasks = ['Terminar os exercícios', 'Comer algo', 'Estudar mais um pouco', 'Dormir']

function App() {
  return (
    <ol>
      {tasks.map((currTask) => Task(currTask))}
    </ol>
  );
}

export default App;
