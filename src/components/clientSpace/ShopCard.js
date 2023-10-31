import "../../assets/style/shopCard.css";
const ShopCard = ({ product }) => {
  const { nameProduct, price, quantity, SelectedFile, sum, id } = product;
  return (
    <>
      <tr class="item-info">
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
      <hr />
    </>
  );
};
export default ShopCard;
