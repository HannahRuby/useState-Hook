import { useState } from "react";

export default function App() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }
  function resetCounter() {
    setMyCounterState(myCounterState - myCounterState);
  }
  return (
    <div>
      <p>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={resetCounter}>Reset</button>
      {/* Same as: button.addEventListener('click', incrementCounter) */}
    </div>
  );
}
