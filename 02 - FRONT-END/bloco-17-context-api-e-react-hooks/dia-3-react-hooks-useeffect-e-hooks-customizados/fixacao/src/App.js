import React, { useState } from 'react';
import { Timer } from './Timer';

export default function App() {
  const [timer, setTimer] = useState(false);

  return (
    <div className="App">
      {timer ? (
        <>
          <Timer />
          <button type="button" onClick={ () => setTimer(false) }>Kill Timer</button>
        </>
      ) : (
        <button type="button" onClick={ () => setTimer(true) }>Activate Timer</button>
      )}
    </div>
  );
}
