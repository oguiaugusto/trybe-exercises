import React from 'react';

export default function TasksList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={ `task-id-${i + 1}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
