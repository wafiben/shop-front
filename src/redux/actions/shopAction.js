import { ADD_TO_SHOP } from "../types";

export const addProductToShop = (product) => {
  return { type: ADD_TO_SHOP, payload: product };
};
