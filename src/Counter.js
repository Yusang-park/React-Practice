import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    // setter은 index를 반환해줌과 동시에 set한다.
    setCount((index) => index + 1);
  };
  const minus = () => {
    setCount((index) => index - 1);
  };

  return (
    <div>
      <h1>hello, this is counter!</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          plus();
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          minus();
        }}
      >
        Minus
      </button>
    </div>
  );
}

export default Counter;

// 화살표 함수
// const ~~ = () =>
// this가 내부를 가르키며

// function은
// 클래스를 가르킨다
