import {
	ADD_PODUCT,
	MODIFY_PODUCT_SHOW,
	DELETE_PODUCT,
	GET_PRODUCT,
	LOADING_PRODUCT,
	GET_ONE_PRODUCT,
	GET_PRODUCT_COMPANY,
	GET_PRODUCTS_OF_SPECEFIC_COMPANY,
	PRODUCT_FAILED,
	GET_PRODUCTS_OF_SPECEFIC_COMPANY_FAILED,
	GET_ONE_PRODUCT_OF_COMPANY,
	LOADING_GET_ONE_PRODUCT,
	MODIFY_PRODUCT
} from "../types";
import axios from "axios";
import {baseUrl} from "./../../config";

export const addProduct=(product) => async (dispatch) => {
	dispatch({type: LOADING_PRODUCT});
	const config={
		headers: {
			token: localStorage.getItem("token"),

		},
	};
	try {
		const {data: {user: {products}}}=await axios.post(`${baseUrl}/product`,product,config);
		dispatch({type: ADD_PODUCT,payload: products});
	} catch(error) {
		console.log(error);
	}
};

export const deleteProduct=(productId) => async (dispatch) => {
	dispatch({type: LOADING_PRODUCT});
	const config={
		headers: {
			token: localStorage.getItem("token"),

		},
	};
	try {
		const {
			data: {products}
		}=await axios.delete(`${baseUrl}/company-products/${productId}`,config);
		dispatch({type: DELETE_PODUCT,payload: products});
	} catch(error) {
		console.log(error);
	}
};

export const modifyProductAction=(id,info) => async (dispatch) => {
	dispatch({type: LOADING_PRODUCT});
	const config={
		headers: {
			token: localStorage.getItem("token"),

		},
	};
	try {
		const {data: {products}}=await axios.put(`${baseUrl}/company-products/${id}`,info,config);
		dispatch({type: MODIFY_PRODUCT,payload: products});
	} catch(error) {
		console.log(error);
	}
};

export const getProduct=(id) => async (dispatch) => {
	dispatch({type: LOADING_GET_ONE_PRODUCT});
	const config={
		headers: {
			token: localStorage.getItem("token"),

		},
	};
	try {
		const {
			data: {product}
		}=await axios.get(`${baseUrl}/company-products/${id}`,config);

		dispatch({type: GET_ONE_PRODUCT_OF_COMPANY,payload: product});

	} catch(error) {
		console.log(error);
	}
};

export const getProductOfCompany=() => async (dispatch) => {
	dispatch({type: LOADING_PRODUCT});
	const config={
		headers: {
			token: localStorage.getItem("token"),

		},
	};
	try {
		const {data: {products}}=await axios.get(`${baseUrl}/company-products`,config);
		dispatch({type: GET_PRODUCT_COMPANY,payload: products});

	} catch(error) {
		const {response: {data: {msg}}}=error
		dispatch({type: PRODUCT_FAILED,payload: msg});
	}
}

export const getProductsOfCompanyForClient=(idOfCompany) => async (dispatch) => {
	const config={
		headers: {
			token: localStorage.getItem("token")
		},
	};
	try {
		const {data: {products}}=await axios.get(`${baseUrl}/product_user_company/${idOfCompany}`,config);
		dispatch({type: GET_PRODUCTS_OF_SPECEFIC_COMPANY,payload: products})
	} catch(error) {
		const {response: {data: {msg}}}=error;
		dispatch({type: GET_PRODUCTS_OF_SPECEFIC_COMPANY_FAILED,payload: msg})
	}
}
export const handleShowProduct=(id) => async (dispatch) => {
	const config={
		headers: {
			token: localStorage.getItem("token")
		},
	};
	try {
		const {data: {products}}=await axios.put(`${baseUrl}/show/${id}`,null,config);
		dispatch({type: MODIFY_PODUCT_SHOW,payload: products})
	} catch(error) {
		console.log("ssss")
	}
}
