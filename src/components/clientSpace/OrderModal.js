import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import locationsData from "../../utils/tunisia.json";
import { useParams } from "react-router-dom";
import { makeOrderAsDraft } from "../../redux/actions/shopAction";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

export const OrderModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const { products, isDraftLoading } = useSelector(
    (state) => state.shopReducer
  );
  const { id, nameCompany } = useParams();
  const [order, setOrder] = useState({
    destination: {
      state: "",
      city: "",
      locality: "",
    },
    number: "",
  });
  const dispatch = useDispatch();

  const [cp, setCp] = useState(null);
  const handleStateChange = (selectedState) => {
    setOrder({
      ...order,
      destination: {
        ...order.destination,
        state: selectedState,
        city: "",
        locality: "",
      },
    });
  };

  const handleCityChange = (selectedCity) => {
    setOrder({
      ...order,
      destination: {
        ...order.destination,
        city: selectedCity,
        locality: "",
      },
    });
  };

  const handleLocalityChange = (selectedLocality) => {
    setOrder({
      ...order,
      destination: {
        ...order.destination,
        locality: selectedLocality,
      },
    });
    const { cp } = locationsData[order.destination.state].find(
      (elt) => elt.localite === selectedLocality
    );
    setCp(cp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destination, number } = order;
    const idOfCompany = id;
    const orderObj = {
      destination: { ...destination, cp },
      number,
      products,
      idOfCompany,
    };
    dispatch(makeOrderAsDraft(orderObj, navigate, { id, nameCompany }));
  };

  useEffect(() => {
    if (!show) {
      setOrder({
        ...order,
        destination: {
          state: "",
          city: "",
          locality: "",
        },
        number: "",
      });
    }
  }, [show]);

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
            <Col sm="10">
              <Form.Control
                required={true}
                as="select"
                value={order.destination.state}
                onChange={(e) => handleStateChange(e.target.value)}
              >
                <option value="" disabled>
                  Select State
                </option>
                {Object.keys(locationsData).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>

          {order.destination.state && (
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                City
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  required={true}
                  as="select"
                  value={order.destination.city}
                  onChange={(e) => handleCityChange(e.target.value)}
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  {locationsData[order.destination.state].map((city) => (
                    <option key={city.delegation} value={city.delegation}>
                      {city.delegation}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
          )}

          {order.destination.city && (
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Locality
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  required={true}
                  as="select"
                  value={order.destination.locality}
                  onChange={(e) => handleLocalityChange(e.target.value)}
                >
                  <option value="" disabled>
                    Select Locality
                  </option>
                  {locationsData[order.destination.state].map((locality) => (
                    <option key={locality.localite} value={locality.localite}>
                      {locality.localite}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
          )}

          {order.destination.locality && (
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                CP
              </Form.Label>
              <Col sm="10">{cp && cp}</Col>
            </Form.Group>
          )}

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
          {isDraftLoading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <Button variant="primary" type="submit">
              Make Order
            </Button>
          )}
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
