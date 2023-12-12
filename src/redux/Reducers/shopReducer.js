import {
  ADD_TO_SHOP,
  MAKE_ORDER_AS_DRAFT_LOADING,
  MAKE_ORDER_AS_DRAFT,
} from "../types";

const initialState = {
  products: [],
  isDraftLoading: false,
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
    case MAKE_ORDER_AS_DRAFT_LOADING:
      return { ...state, isDraftLoading: true };
    case MAKE_ORDER_AS_DRAFT:
      return { ...state, isDraftLoading: false };

    default:
      return state;
  }
};

export default shopReducer;
