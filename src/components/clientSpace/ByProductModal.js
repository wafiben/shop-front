import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useErrorMessage } from "../../hooks/useErrorMessage";

const ByProductModal = ({
  show,
  handleClose,
  nameProduct,
  price,
  SelectedFile,
  qte,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { message, setErrorMessage, setTimeShow } = useErrorMessage();

  const [sum, setSum] = useState(price);
  const notify = () => {
    setErrorMessage("quantity");
    setTimeShow();
  };

  const incrementQuantity = () => {
    if (quantity >= qte) {
      notify();
    } else {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setSum(newQuantity * price);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setSum(newQuantity * price);
    }
  };

  const addarticleToShop = () => {
    if (quantity > qte) {
      notify();
    }else{
      alert('sssss')
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product :&nbsp;{nameProduct} </Modal.Body>
        <Modal.Body>price :&nbsp;{sum} DT</Modal.Body>
        <img
          src={SelectedFile && `/imageProducts/${SelectedFile}`}
          width="50%"
          className="mx-auto m-1"
          alt="Product Image"
        />
        <div className="d-flex justify-content-center m-1">
          <button className="quantity" onClick={incrementQuantity}>
            +
          </button>
          <span>{quantity}</span>
          <button className="quantity" onClick={decrementQuantity}>
            -
          </button>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addarticleToShop}>
            Add to Shop
          </Button>
        </Modal.Footer>
        {message && (
          <div className="card p-3 m-2">
            <div class="card-body fw-bold">
              <div className="text-error">{message}</div>
              <div className="text-error">maximum of quantity is {qte}</div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ByProductModal;
