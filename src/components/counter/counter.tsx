import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handlerClick = (incremento: number) => {
    setCount(count + incremento);
    console.log(count);
  };

  useEffect(() => {
    console.log(count);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => handlerClick(-1)}>-</button>
      <button onClick={() => handlerClick(+1)}>+</button>
    </div>
  );
}
