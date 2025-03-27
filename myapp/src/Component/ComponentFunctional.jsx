import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(1); // Time in seconds
  const [isRunning, setIsRunning] = useState(true); // Stopwatch status
  let timer = null; // Timer reference

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup when component unmounts or when isRunning changes
    return () => clearInterval(timer);
  }, [isRunning]);

  // Start stopwatch
  const startTimer = () => setIsRunning(true);

  // Stop stopwatch
  const stopTimer = () => setIsRunning(false);

  // Reset stopwatch
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱️ Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
