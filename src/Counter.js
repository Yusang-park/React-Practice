import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const plus = (index) => {
    setCount(index + 1);
  };
  const minus = (index) => {
    setCount(index - 1);
  };

  return (
    <div>
      <h1>hello, this is counter!</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          plus(count);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          minus(count);
        }}
      >
        Minus
      </button>
    </div>
  );
}

export default Counter;
