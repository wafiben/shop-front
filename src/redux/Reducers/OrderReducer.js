import { GET_LIST_ORDER_CLIENT_LOADING, GET_LIST_ORDER_CLIENT } from "../types";

const initialState = {
  orderList: [],
  loading: false,
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_ORDER_CLIENT_LOADING:
      return { ...state, loading: true };
    case GET_LIST_ORDER_CLIENT:
      return { ...state, orderList: action.payload, loading: false };
    default:
      return state;
  }
};

export default OrderReducer;
