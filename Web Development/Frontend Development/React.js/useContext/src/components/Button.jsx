import React, { useContext } from "react";
import { counterContext } from "../context/context";

const Button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      Button
      <div>{value.count}</div>
    </div>
  );
};

export default Button;
