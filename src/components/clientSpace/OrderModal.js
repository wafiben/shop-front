import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useSelector } from "react-redux";

export const OrderModal = ({ show, handleClose }) => {
  const { products } = useSelector((state) => state.shopReducer);
  const [order, setOrder] = useState({
    destination: "",
    number: "",
    products: products,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("==>", order);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Destination
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              state
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required={true}
                type="text"
                placeholder="state"
                onChange={(e) =>
                  setOrder({ ...order, destination: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
            city
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required={true}
                type="text"
                placeholder="city"
                onChange={(e) =>
                  setOrder({ ...order, destination: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Number
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required={true}
                onChange={(e) => setOrder({ ...order, number: e.target.value })}
                type="number"
                placeholder="Please enter your phone number"
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            make Order
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
