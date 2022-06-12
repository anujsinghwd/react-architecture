import React from "react";
import { useRecoilState } from "recoil";
import { counterState, incrementByState } from "../states";

export const CounterButton = () => {
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);

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
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click Me
      </button>
    </>
  );
};
