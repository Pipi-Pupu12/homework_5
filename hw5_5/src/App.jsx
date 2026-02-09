import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  
  const timerRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const startTimer = () => {

    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Секундомер: {seconds} сек.</h2>
      
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Фокус здесь..." 
        style={{ marginBottom: '10px', display: 'block', margin: '10px auto' }}
      />

      <button onClick={startTimer} style={{ marginRight: '10px' }}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
    </div>
  );
}

export default Stopwatch;