import { useState } from "react";

export const useCount = (initial = 0, min: number, max: number) => {
  if (initial < min || initial > max) {
    initial = min;
  }
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > min) {
      setCount(prev => prev - 1);
    }
  };

  const increment = () => {
    if (count < max) {
      setCount(prev => prev + 1);
    }
  };

  return { count, decrement, increment };
};