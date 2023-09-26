import axios from "axios";
import { baseUrl } from "./../../config";
import { GET_COMPANIES, LOADING_COMPANIES, GET_ONE_COMPANY, LOADING_GET_COMPANY, GET_ONE_COMPANY_FAILED } from "../types";

export const getAllCompanies = () => async (dispatch) => {
    const config = {
        headers: {
            token: localStorage.getItem("token")
        },
    };
    try {
        const { data: { companies } } = await axios.get(`${baseUrl}/company`, config);
        dispatch({ type: GET_COMPANIES, payload: companies });
    } catch (error) {
        console.log({ error })
    }
}
export const getOneCompany = (id) => async (dispatch) => {
    dispatch({ type: LOADING_GET_COMPANY })
    const config = {
        headers: {
            token: localStorage.getItem("token")
        },
    };
    try {
        const { data: { company } } = await axios.get(`${baseUrl}/company/${id}`, config);
        
            dispatch({ type: GET_ONE_COMPANY, payload: company });
        
       /* else {
            dispatch({ type: GET_ONE_COMPANY_FAILED, payload: " company does not have any products" });
        }*/
    } catch (error) {
        console.log({ error })
    }
}