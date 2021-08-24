import React, { useContext, useState } from "react";

const ThemeContext = React.createContext(null);

export default function OpctionView() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h3>Theme : {theme}</h3>
        <ThemeButtonRow></ThemeButtonRow>
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeButtonRow() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onChange = (value) => {
    setTheme(value);
  };

  return (
    <span>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <div>
            <h3>{theme}</h3>
          </div>
        )}
      </ThemeContext.Consumer>

      <button onClick={() => onChange("Dark")}>Dark</button>
      <button onClick={() => onChange("Ligth")}>Light</button>
    </span>
  );
}
