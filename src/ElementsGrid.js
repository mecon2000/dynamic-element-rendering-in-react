import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";

export function ElementsGrid(props) {
  const [gridCells, setGridCells] = useState([]);

  const maxColumns = 12; //TODO find max columns

  useEffect(() => {
    const createGridCells = () => {
      const newGridCells = [];
      props.cells.forEach((cell, i) => {
        //TODO validating cells should be here!
        const [x, y, header, type, value] = cell.split(";");
        //console.log("[x, y, header, type, value]=", x, y, header, type, value);
        switch (type.toUpperCase()) {
          case "SELECT":
            newGridCells.push(
              <div
                key={i}
                data-grid={{
                  x: Number(x),
                  y: Number(y),
                  w: 1,
                  h: 3,
                  static: true,
                }}
              >
                <SelectInput header={header} options={value.split(",")} />
              </div>
            );            
            break;
          case "TEXT_INPUT":
            newGridCells.push(
              <div
                key={i}
                data-grid={{
                  x: Number(x),
                  y: Number(y),
                  w: 1,
                  h: 3,
                  static: true,
                }}
              >
                <TextInput header={header} value={value} />
              </div>
            );
            break;
          default:
            console.log("unknown cell type");
        }
      });      
      setGridCells(newGridCells);
    };
    createGridCells();
  }, [props.cells]);


  return (
    <GridLayout
      className="layout"
      cols={maxColumns}
      rowHeight={30}
      width={1200}
    >
      {gridCells}
    </GridLayout>
  );
}

//edo@stampli.com
