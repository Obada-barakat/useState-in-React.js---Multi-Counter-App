import { useState } from "react";
import "./MultiCounter.css";

export default function MultiCounter() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const updateCounter = (index, amount) => {
    const newCounters = counters.map((value, i) =>
      i === index ? value + amount : value
    );
    setCounters(newCounters);
  };

  const removeCounter = (index) => {
    const newCounters = counters.filter((_, i) => i !== index);
    setCounters(newCounters);
  };

  return (
    <div className="app">
      <h1>Multi Counter App</h1>
      <button onClick={addCounter} className="add-btn">
        + Add Counter
      </button>

      <div className="counter-grid">
        {counters.map((count, index) => (
          <div key={index} className="counter-card">
            <h2>Counter {index + 1}</h2>
            <p className="count">{count}</p>

            <div className="controls">
              <button
                onClick={() => updateCounter(index, -1)}
                className="btn minus"
              >
                -
              </button>
              <button
                onClick={() => updateCounter(index, +1)}
                className="btn plus"
              >
                +
              </button>
            </div>

            <button onClick={() => removeCounter(index)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
