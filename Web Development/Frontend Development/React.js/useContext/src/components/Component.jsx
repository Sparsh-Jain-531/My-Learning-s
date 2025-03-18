import React, { useContext } from "react";
import Button from "./Button";
import { counterContext } from "../context/context";

const Component = () => {
  const value = useContext(counterContext);
  return (
    <div>
      Component
      <button onClick={() => value.setCount((count) => count + 1)}>Add</button>
      <Button />
    </div>
  );
};

export default Component;
