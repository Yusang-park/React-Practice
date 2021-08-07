import React, { useState, useReducer} from "react";


function myReducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}


function Counter() {
  const [count, dispatch] = useReducer(myReducer, 0);

  return (
    <div>
      <h1>hello, this is counter!</h1>
      <h2>{count}</h2>
      
      <button
        onClick={() => {
          dispatch({ 'type': 'PLUS' });
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          dispatch({ 'type': 'MINUS' });
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
