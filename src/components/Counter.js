import { useState } from "react";

function Counter({start = 0}) {
  const [count, setCount] = useState(start);

  const addOne = () => setCount((previous) => previous + 1);

  return <button onClick={addOne}>{count}</button>;
}

export default Counter;
