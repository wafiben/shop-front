import "../../assets/style/shopCard.css";
const ShopCard = ({ product }) => {
  const { nameProduct, price, quantity, SelectedFile, sum, id } = product;
  return (
    <>
      {/* <tr class="item-info">
        <td data-th="Article" class="col item">
          <a
            href="https://www.mytek.tn/presse-agrumes-moulinex-25w-gris.html"
            title="Presse Agrumes MOULINEX PC300 25w - Gris"
            tabindex="-1"
            class="product-item-photo"
          >
            <span class="product-image-container product-image-container-3328">
              <span class="product-image-wrapper">
                <img
                  src={SelectedFile && `/imageProducts/${SelectedFile}`}
                  width="50%"
                  className="mx-auto m-1"
                  alt="Product Image"
                />
              </span>
            </span>
          </a>
          <div class="product-item-details">
            <strong class="product-item-name">
              <a href="https://www.mytek.tn/presse-agrumes-moulinex-25w-gris.html">
                {nameProduct}
              </a>
            </strong>
          </div>
        </td>
        <td class="col qty" data-th="Qté">
          <div class="field qty">
            <div class="control qty">
              <label for="cart-926094-qty">
                <span class="label">Qté</span>
                <input
                  id="cart-926094-qty"
                  name="cart[926094][qty]"
                  data-cart-item-id="PC300"
                  value={quantity}
                  type="number"
                  min="0"
                  size="4"
                  step="any"
                  title="Qté"
                  class="input-text qty"
                  data-validate="{required:true,'validate-greater-than-zero':true}"
                  data-item-qty="1"
                  data-role="cart-item-qty"
                />
              </label>
            </div>
            <p>unit price :{price}</p>
          </div>
        </td>
        <td class="col subtotal" data-th="Sous-total">
          <span class="price-excluding-tax" data-label="HT">
            <span class="cart-price">
              <span class="price">{sum}&nbsp;DT</span>
            </span>
          </span>
        </td>
      </tr>
      <hr /> */}

      {/* ::::::: */}
      {/* :::: */}

      {/* ::::::::::::::: */}
      <div class=" shopping-cart">
        <table class="table">
          <thead>
            <tr>
              <th class="text">Product Name</th>
              <th class="text">Quantity</th>
              <th class="text">unit price</th>
              <th class="text"> sum price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="">
                  <img
                    src={SelectedFile && `/imageProducts/${SelectedFile}`}
                    width="70px"
                    height="50%"
                    className="mx-auto m-4"
                    alt="Product Image"
                  />

                  <div class="product-info">
                    <h4 class="product-title"> {nameProduct}</h4>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div class="count-input">{quantity}</div>
              </td>
              <td class="text-center text-lg text-medium">{price}</td>
              <td class="text-center text-lg text-medium">
                <span class="price">{sum}&nbsp;</span>
              </td>
              <td class="text-center">
                <a
                  class="remove-from-cart"
                  href="#"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Remove item"
                >
                  <i class="fa fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ShopCard;
