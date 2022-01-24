import { useState } from 'react';

export default function useArray() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => setTasks([...tasks, task]);

  return [tasks, addTask];
}
