import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Form from "react-bootstrap/Form";

function PhoneTextInput({ value, handleChange, style, field }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{field}</Form.Label>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default PhoneTextInput;
