import React from "react";
import "../../assets/style/detailsCompany.css";
import Button from "react-bootstrap/Button";
import ByProductModal from "./ByProductModal";
import { useState } from "react";
import { useSelector } from "react-redux";

function CardProductCompany({
  nameProduct,
  price,
  unitType,
  qte,
  SelectedFile,
  show,
  id,
}) {
  const { products } = useSelector((state) => state.shopReducer);
  const [disable, setDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleQuantityPermission = (quantityStateAdded,products) => {
    const product = products.find((elt) => elt.id === id);
    if((quantityStateAdded + product.quantity < qte)){
      setDisable(true)
    }
    return !(quantityStateAdded + product.quantity < qte);
  };
  const handleShow = () => {
    const product = products.find((elt) => elt.id === id);
    if (product && qte <= product.quantity) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    setShowModal(true);
  };
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
              {qte} {unitType}
            </h6>
            <small className="prix"> {price} DT</small>
          </div>
        </div>
        <Button className="m-1" onClick={handleShow}>
          Buy product
        </Button>
      </div>
      <ByProductModal
        qte={qte}
        show={showModal}
        handleClose={handleClose}
        nameProduct={nameProduct}
        price={price}
        SelectedFile={SelectedFile}
        id={id}
        disable={disable}
        handleQuantityPermission={handleQuantityPermission}
      />
    </>
  );
}

export default CardProductCompany;
