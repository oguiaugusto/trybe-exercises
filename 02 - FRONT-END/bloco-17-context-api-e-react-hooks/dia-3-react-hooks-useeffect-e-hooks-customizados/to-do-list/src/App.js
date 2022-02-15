import React from 'react';
import useArray from './hooks/useArray';
import TaskInput from './TaskInput';
import TasksList from './TasksList';

export default function App() {
  const [tasks, addTask] = useArray();

  return (
    <div className="App">
      <TaskInput addTask={ addTask } />
      <TasksList tasks={ tasks } />
    </div>
  );
}
