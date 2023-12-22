import {
  ADD_TO_SHOP,
  CALCULATE_TOTAL,
  MAKE_ORDER_AS_DRAFT,
  MAKE_ORDER_AS_DRAFT_LOADING,
  GET_LIST_ORDER_CLIENT,
  GET_LIST_ORDER_CLIENT_LOADING,
} from "../types";
import axios from "axios";
import { baseUrl } from "../../config";

export const addProductToShop = (product) => {
  return { type: ADD_TO_SHOP, payload: product };
};

export const calculateTotal = (total) => {
  return { type: CALCULATE_TOTAL, payload: total };
};

export const makeOrderAsDraft =
  (order, navigate, { id, nameCompany }) =>
  async (dispatch) => {
    dispatch({ type: MAKE_ORDER_AS_DRAFT_LOADING });
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    try {
      await axios.post(`${baseUrl}/shop`, order, config);
      dispatch({ type: MAKE_ORDER_AS_DRAFT, payload: order });
      navigate(`/company_details/${nameCompany}/${id}/profile`);
    } catch (error) {
      console.log(error);
    }
  };

export const getListOrderbyClient = () => async (dispatch) => {
  dispatch({ type: GET_LIST_ORDER_CLIENT_LOADING });
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/shop-client`, config);
    console.log("==>hello", res);
    /*     dispatch({ type: MAKE_ORDER_AS_DRAFT, payload: order }); */
  } catch (error) {
    console.log(error);
  }
};
