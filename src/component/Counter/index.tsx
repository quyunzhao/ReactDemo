import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef<number>();
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <h1>
      Now: {count}, before: {prevCount}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </h1>
  );
}
