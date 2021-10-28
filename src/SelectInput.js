import { useEffect } from "react";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

export function SelectInput(props) {
  useEffect(() => {
    console.log(`SelectInput\t'${props.header}'\twas created!`);
    return () => {
      console.log(`SelectInput\t'${props.header}'\twas destroyed!`);
    };
  }, []);

  //TODO:validate props.options is not empty
  return (
    <>
      {props.header}
      <Dropdown
        placeholder="Select an option"
        options={props.options}
        value={props.options[0]}
      />
    </>
  );
}
