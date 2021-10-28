import { useEffect } from "react";

export function TextInput(props) {
  useEffect(() => {
    console.log(`TextInput\t'${props.header}'\twas created!`);
    return () => {
      console.log(`TextInput\t'${props.header}'\twas destroyed!`);
    };
  }, []);

  return (
    <>
      <form>
        <label>
          {props.header}
          <input type="text" defaultValue={props.value} />
        </label>
      </form>
    </>
  );
}
