import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter.js";
import InputBox from "./inputSample.js";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("");

  const imageStyle = {
    width: 100,
  };

  const moveToPractice = (e) => {
    setMode(e.target.name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={imageStyle} className="App-logo" alt="logo" />
        <h3>Hello, This is the React Practice</h3>

        <button onClick={moveToPractice} name="Counter">
          Counter
        </button>
        <button onClick={moveToPractice} name="InputBox">
          InputBox
        </button>
        {mode === "Counter" ? (
          <Counter />
        ) : mode === "InputBox" ? (
          <InputBox />
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
}

export default App;
