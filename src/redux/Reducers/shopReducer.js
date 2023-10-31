import { ADD_TO_SHOP } from "../types";

const initialState = {
  products: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOP:
      const updatedProducts = state.products.slice();
      const { nameProduct, price, quantity, selectedFile, sum, id } =
        action.payload;
      const existingProductIndex = updatedProducts.findIndex(
        (product) => product.id === id
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + quantity,
          sum: updatedProducts[existingProductIndex].sum + sum,
        };
        return { ...state, products: updatedProducts };
      } else {
        return { ...state, products: [...state.products, action.payload] };
      }
    default:
      return state;
  }
};

export default shopReducer;
