import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter.js";

function App() {
  const imageStyle = {
    width: 100,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={imageStyle} className="App-logo" alt="logo" />
        <h3>React Practice</h3>
        <Counter />
      </header>
    </div>
  );
}

export default App;
