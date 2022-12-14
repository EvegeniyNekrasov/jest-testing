import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "grey" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disabled}
        id="disabled-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
