import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import DropDownListUnit from "./DropDownListUnit";
import "../../assets/style/file.css";

function AddProduct({
  handleQuantity,
  quantity,
  handleChange,
  unit,
  handleUnit,
  handleChangeFile,
  selectedFile
}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name of Product</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="name of product"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="price"
            onChange={handleChange}
          />
          <DropDownListUnit unit={unit} handleUnit={handleUnit} />
        </Form.Group>
      </Form>
      <div className="container-quantity">
        <button className="quantity" onClick={() => handleQuantity("+")}>
          +
        </button>
        <span>{quantity}</span>
        <button className="quantity" onClick={() => handleQuantity("-")}>
          -
        </button>
      </div>

      <div>
        <label for="avatar" className="photo-container">
          {selectedFile ? <img src={selectedFile} alt="add-product" width="200px" /> : "drag your photo from Device"}
          <input
            type="file"
            id="avatar"
            name="SelectedFile"
            accept="image/png, image/jpeg"
            onChange={handleChangeFile}
          />
        </label>
      </div>
    </>
  );
}

export default AddProduct;
