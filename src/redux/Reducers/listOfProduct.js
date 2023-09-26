import {
	ADD_PODUCT,
	GET_PRODUCT,
	LOADING,
	GET_ONE_PRODUCT_OF_COMPANY,
	GET_PRODUCT_COMPANY,
	GET_PRODUCTS_OF_SPECEFIC_COMPANY,
	PRODUCT_FAILED,
	MODIFY_PODUCT_SHOW,
	GET_PRODUCTS_OF_SPECEFIC_COMPANY_FAILED,
	LOADING_PRODUCT,
	DELETE_PODUCT,
	LOADING_GET_ONE_PRODUCT,
	MODIFY_PRODUCT
} from "../types";
const initState={
	product: {},list: [],loading: false,productCompany: [],productOfSpeceficCOmpany: [],msg: "",error: "",
	getOneProductLoading: false,
};
const listReducer=(state=initState,action) => {
	switch(action.type) {
		case LOADING_GET_ONE_PRODUCT: return {...state,getOneProductLoading: true}
		case LOADING_PRODUCT:
			return {...state,loading: true};
		case ADD_PODUCT:
		case DELETE_PODUCT:
		case MODIFY_PRODUCT:
			return {
				...state,
				productCompany: action.payload,
				loading: false,
			};
		case GET_PRODUCT:
			return {...state,list: action.payload,loading: false};
		/*case MODIFY_PRODUCT:*/
		case GET_ONE_PRODUCT_OF_COMPANY:
			return {...state,product: action.payload,loading: false,getOneProductLoading: false};
		case GET_PRODUCT_COMPANY:
		case MODIFY_PODUCT_SHOW:
			return {...state,productCompany: action.payload,loading: false};
		case GET_PRODUCTS_OF_SPECEFIC_COMPANY: return {...state,productOfSpeceficCOmpany: action.payload,loading: false};
		case GET_PRODUCTS_OF_SPECEFIC_COMPANY_FAILED:
		case PRODUCT_FAILED: return {...state,error: action.payload,loading: false}
		default:
			return state;
	}
};

export default listReducer;
