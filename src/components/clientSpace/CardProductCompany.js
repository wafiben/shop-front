import React from "react";
import "../../assets/style/detailsCompany.css";
import Button from "react-bootstrap/Button";
import ByProductModal from "./ByProductModal";
import { useState } from "react";

function CardProductCompany({
  nameProduct,
  price,
  unitType,
  quantity,
  SelectedFile,
  show,
  id,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <div className="divcart">
        <div className="divcart2">
          <div className="display-26 text-secondary ">
            <img
              src={SelectedFile && `/imageProducts/${SelectedFile}`}
              alt="wrapkit"
              className="img-detailscompany"
            />

            <h5 className="nameprodact">{nameProduct}</h5>
            <h6 className="quantityunit">
              {quantity} {unitType}
            </h6>
            <small className="prix"> {price} DT</small>
          </div>
        </div>
        <Button className="m-1" onClick={handleShow}>
          Buy product
        </Button>
      </div>
      <ByProductModal
        show={showModal}
        handleClose={handleClose}
        nameProduct={nameProduct}
        price={price}
        SelectedFile={SelectedFile}
      />
    </>
  );
}

export default CardProductCompany;
