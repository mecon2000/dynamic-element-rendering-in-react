import { useEffect } from "react";

export function TextInput(props) {
  useEffect(() => {
    console.log(`TextInput\t'${props.header}'\twas created!`);
    return () => {
      console.log(`TextInput\t'${props.header}'\twas destroyed!`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
        <label>
          {props.header}
          <input type="text" defaultValue={props.value} />
        </label>
    </>
  );
}
