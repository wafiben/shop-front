import React, { Children } from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ value, type, field, style, handleClick, children }) {
  return (
    <Button style={style} onClick={handleClick} type={type}>
     
        {field}
        {children}
     
    </Button>
  );
}

export default CustomButton;
