import { GET_COMPANIES, LOADING_COMPANIES, GET_ONE_COMPANY, LOADING_GET_COMPANY, GET_ONE_COMPANY_FAILED } from "../types";

const initState = { companies: [], company: {}, loading: false, error: "" };
const companyReducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING_GET_COMPANY: return { ...state, loading: true, company: {} };
        case GET_COMPANIES:
            return { ...state, companies: action.payload, loading: false };
        case GET_ONE_COMPANY: return { ...state, company: action.payload, loading: false, error: "" };
        case GET_ONE_COMPANY_FAILED: return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default companyReducer;