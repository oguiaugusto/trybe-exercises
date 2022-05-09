import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={ darkMode ? 'app dark' : 'app' }>
      <h1>Meu primeiro site com heroku</h1>
      <button type="button" onClick={ () => setDarkMode(!darkMode) }>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
