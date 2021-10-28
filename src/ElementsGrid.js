import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { useState, useEffect } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";

const GridLayoutWithWidth = WidthProvider(GridLayout);

export function ElementsGrid(props) {
  const [gridCells, setGridCells] = useState([]);
  const [maxCols, setMaxCols] = useState(12);

  useEffect(() => {
    console.log(`ElementsGrid was created!`);
    return () => {
      console.log(`ElementsGrid was destroyed!`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setMaxCols(Math.max(...props.cells.map((cell) => cell.split(";")[1])));

    const createGridCells = () => {
      const newGridCells = [];
      props.cells.forEach((cell, i) => {
        //TODO validating cells should be here!
        const [row, col, header, type, value] = cell.split(";");
        
        switch (type.toUpperCase()) {
          case "SELECT":
            newGridCells.push(
              <div
                key={cell}
                data-grid={{
                  x: Number(col - 1),
                  y: Number(row - 1),
                  w: 1,
                  h: 1,
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
                key={cell}
                data-grid={{
                  x: Number(col - 1),
                  y: Number(row - 1),
                  w: 1,
                  h: 1,
                  static: true,
                }}
              >
                <TextInput header={header} value={value} />
              </div>
            );
            break;
          default:
            console.error("unknown cell type");
        }
      });
      setGridCells(newGridCells);
    };
    createGridCells();
  }, [props.cells]);

  return (
    <GridLayoutWithWidth className="layout" rowHeight={70} cols={maxCols}>
      {gridCells}
    </GridLayoutWithWidth>
  );
}
