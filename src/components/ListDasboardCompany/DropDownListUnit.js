import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../../assets/style/file.css";

function DropDownListUnit({ unit, handleUnit }) {
  return (
    <Dropdown className="dropdown-list">
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        /* onClick={() => console.log("hello")} */
      >
        {unit}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleUnit("kilo")}>kilo</Dropdown.Item>
        <Dropdown.Item onClick={() => handleUnit("unit")}> unit </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownListUnit;
