import React, { useState } from "react";
import { ElementsGrid } from "./ElementsGrid";
import "./App.css";

function App() {
  const [isRenderButtonEnabled, setIsRenderButtonEnabled] = useState(false);
  const [cells, setCells] = useState([]);
  const [input, setInput] = useState("");

  const isValidPattern = (s) => {
    //return true if s looks like this: "x;y;header;type;value \n x;y;header;type;value \n ..."
    return s.split("\n").every((line) => {
      const splitLine = line.split(";");
      const isValidLine =
        splitLine.length === 5 &&
        !isNaN(Number(splitLine[0])) &&
        !isNaN(Number(splitLine[1])) &&
        splitLine[2] !== "" &&
        splitLine[3] !== "" &&
        splitLine[4] !== "";
      return isValidLine;
    });
  };

  const onChange = (e) => {
    setInput(e.target.value);
    setIsRenderButtonEnabled(isValidPattern(e.target.value));
  };

  const onRenderRequest = () => {
    setCells(input.split("\n"));
  };

  return (
    <>
      <form>
        <label>
          Enter input: <br />
          <textarea name="textArea" onChange={(e) => onChange(e)} />
        </label>
      </form>
      <button onClick={onRenderRequest} disabled={!isRenderButtonEnabled}>
        Render!
      </button>
      <ElementsGrid cells={cells} />
    </>
  );
}
export default App;
