import { GET_LIST_ORDER_CLIENT, GET_LIST_ORDER_CLIENT_LOADING } from "../types";
import { baseUrl } from "../../config";
import axios from "axios";

export const getListOrderbyClient = () => async (dispatch) => {
  dispatch({ type: GET_LIST_ORDER_CLIENT_LOADING });
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`${baseUrl}/shop-client`, config);
    dispatch({ type: GET_LIST_ORDER_CLIENT,payload:res.data });
  } catch (error) {
    console.log(error);
  }
};