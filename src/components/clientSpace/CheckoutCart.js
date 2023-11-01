import ShopCard from "./ShopCard";
import "../../assets/style/shopCard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutCart = () => {
  const { products } = useSelector((state) => state.shopReducer);
  const totalSum = products.reduce((accumulator, product) => {
    return accumulator + product.sum*product.quantity
  }, 0);

  const { id, nameCompany } = useParams();
  const handleNavigate = useNavigate();
  return (
    <div className="container d-flex align-items-center justify-content-around m-4">
      <tbody class="cart item">
        {products.map((product) => (
          <ShopCard product={product} id={product.id} totalSum={totalSum} />
        ))}
      </tbody>
      <div>
        <div className="d-flex">
          <h2 className="text-muted">
            {" "}
            <i>Total:</i>
          </h2>
          <h2 className="text-muted">
            {" "}
            <i>{totalSum}</i>
          </h2>
          <span className="visually-hidden">unread messages</span>
        </div>
        <div>
          <Button variant="success m-1">Order</Button>
          <Button
            variant="primary"
            onClick={() =>
              handleNavigate(`/company_details/${nameCompany}/${id}/profile`)
            }
          >
            à Back to list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
