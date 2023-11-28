import ShopCard from "../../components/clientSpace/ShopCard";
import "../../assets/style/shopCard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { OrderModal } from "../../components/clientSpace/OrderModal";

const CheckoutCart = () => {
  const { products } = useSelector((state) => state.shopReducer);
  const [total, setTotal] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const totalSum = products.reduce((accumulator, product) => {
      return accumulator + product.sum;
    }, 0);
    setTotal(totalSum);
  }, [products.length, total]);

  const { id, nameCompany } = useParams();
  const handleNavigate = useNavigate();
  return (
    <>
      <div className="box1panierx">
        <div className="boxpanierx">
          <tbody className="cartitem">
            {products.map((product) => (
              <ShopCard product={product} id={product.id} />
            ))}
          </tbody>

          <div>
            <div className="d-flex m-2 ">
              <h2 className="text-muted ">
                {" "}
                <i>Total:</i>
              </h2>
              <h2 className="text-muted">
                {" "}
                <i>{total}</i>
              </h2>
              <span className="visually-hidden">unread messages</span>
            </div>
            <div>
              <Button variant="success m-4" onClick={handleShow}>
                Order
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  handleNavigate(
                    `/company_details/${nameCompany}/${id}/profile`
                  )
                }
              >
                Back to shop
              </Button>
            </div>
          </div>
        </div>
      </div>
      <OrderModal show={show} handleClose={handleClose} />
    </>
  );
};

export default CheckoutCart;
