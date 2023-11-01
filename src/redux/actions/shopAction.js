import { ADD_TO_SHOP, CALCULATE_TOTAL } from "../types";

export const addProductToShop = (product) => {
  return { type: ADD_TO_SHOP, payload: product };
};

export const calculateTotal = (total) => {
  return { type: CALCULATE_TOTAL, payload: total };
};
