import React, { useState } from 'react';

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState('');
  const handleInput = ({ target: { value }}) => setInput(value);

  return (
    <div>
      <label htmlFor="task-input">{'Task: '}</label>
      <input id="task-input" type="text" onChange={ handleInput } value={ input } />
      <button type="button" onClick={ () => { addTask(input); setInput('') } }>Add Task</button>
    </div>
  );
}
