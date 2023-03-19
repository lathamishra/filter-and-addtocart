import React from "react";
import "./button.css";

const Button = (props) => {
  return <input type="button" value={props.label} />;
};

export default Button;
