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
/*
1;1;select these;SELECT;val1,val2,val3,val4
1;2;t1;SELECT;val2
2;1;t1;SELECT;val3
2;2;t1;TEXT_INPUT;some initial input

2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;maritalstatus;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name

1;1;gender;SELECT;Male,Female
2;2;First Name;TEXT_INPUT;Enter your first name
3;3;maritalstatus;SELECT;Single,Maried,Divorced
4;4;last Name;TEXT_INPUT;Enter your last name

*/
