import React from 'react';
import useTimer from './hooks/useTimer';

export function Timer() {
  const [randomNumber, isMultiple, timer] = useTimer();
  return (
    <div>
      <h1>{randomNumber}</h1>
      <h2>{isMultiple ? 'Acertou' : ''}</h2>
      <h3>{`Gerando novo número em ${timer}...`}</h3>
    </div>
  );
}
