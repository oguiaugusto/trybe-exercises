import React, { useState } from 'react';

function App() {
  const [counter, updateCounter] = useState(0);

  return (
    <div>
      <div>Counter {counter}</div>
      <button
        type="button"
        onClick={ () => updateCounter(counter + 1) }
      >
        Increase Counter
      </button>
    </div>
  );
}

export default App;