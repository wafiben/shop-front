import React from "react";
import Form from "react-bootstrap/Form";

function CheckboxForm({ handleClick, id, show }) {
  return (
    <Form >
      
      <Form.Check  type="switch" id="custom-switch" label="Active" onClick={() => handleClick(id)} checked={show} />
      
    </Form>

  );
}

export default CheckboxForm;
