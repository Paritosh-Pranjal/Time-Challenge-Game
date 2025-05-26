import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";
const TimeChallenge = ({ title, targetTime }) => {
  let timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isTimeActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    if (dialog.current) {
      dialog.current.open();
    }
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    if (dialog.current) {
      dialog.current.open();
    }
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        handleReset={handleReset}
      />

      <section className="challenge">
        <h1>{title}</h1>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimeActive ? handleStop : handleStart}>
            {isTimeActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimeActive ? "active" : undefined}>
          {isTimeActive ? " Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
