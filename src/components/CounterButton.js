import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const CounterButton = () => {

    const [incrementBy, setIncrementBy] = React.useState(1);

  const { increment, numberOfClicks } =
    useContext(CounterContext);

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times</p>
      <label>
        Increment By:-
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => increment(incrementBy)}>Click Me</button>
    </>
  );
};
