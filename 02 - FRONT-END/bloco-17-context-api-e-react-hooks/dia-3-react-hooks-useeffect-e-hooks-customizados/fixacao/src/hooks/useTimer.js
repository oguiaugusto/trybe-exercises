import { useState, useEffect } from 'react';

export default function useTimer() {
  const [randomNumber, setRandomNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);
  const [timer, setTimer] = useState(10);

  const SECOND = 1000;
  const NUMBER_TO = 10000;
  const MESSAGE_TO = 4000;
  const MIN = 1;
  const MAX = 100;

  const verifyNumber = (number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      setIsMultiple(true);
      setTimeout(() => setIsMultiple(false), MESSAGE_TO);
    };
  };
  
  const numberInterval = () => {
    const number = Math.floor(Math.random() * MAX) + MIN;
    setRandomNumber(number);
    verifyNumber(number);
    setTimer(10);
  };
  
  useEffect(() => {
    numberInterval();
    const numberI = setInterval(numberInterval, NUMBER_TO);
    const timerI = setInterval(() => setTimer(timer => timer - 1), SECOND);
    
    return () => {
      clearInterval(numberI);
      clearInterval(timerI);
    };
  }, []);

  return [randomNumber, isMultiple, timer];
}
