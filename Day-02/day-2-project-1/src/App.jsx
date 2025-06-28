import React, { useState } from "react";

export default function App() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const stepIncrease = () => {
    setStep(step + 1);
  };
  const stepDecrease = () => {
    setStep(step - 1);
  };
  const handleIncrease = () => {
    setCounter(counter + step);
  };
  const handleDecrease = () => {
    setCounter(counter - step);
  };
  const d = new Date("06 29 2025");
  d.setDate(d.getDate() + counter);
  return (
    <div>
      <div>
        <div>
          <button onClick={stepDecrease}> - </button>
          <h1>Step : {step}</h1>
          <button onClick={stepIncrease}> + </button>
        </div>
        <div>
          <button onClick={handleDecrease}> - </button>
          <h1>counter {counter}</h1>
          <button onClick={handleIncrease}> + </button>
        </div>
        <p>
          <span>
            {counter == 0
              ? " Today "
              : counter > 0
              ? `${counter} days from today is `
              : `${Math.abs(counter)} days ago was `}
          </span>
          <span>{d.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
