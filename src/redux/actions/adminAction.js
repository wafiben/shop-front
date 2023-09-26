import {
	GET_All_COMPANIES_LOADING,
	GET_ALL_COMPANIES,
	GET_LENGTH_COMPANY_INFO_LOADING,
	GET_LENGTH_COMPANY_INFO,
	GET_ALL_BANNED_COMPANIES,
	GET_ALL_BANNED_COMPANIES_LOADING,
	GET_ALL_VERIFIED_COMPANIES_LOADING,
	GET_ALL_VERIFIED_COMPANIES,
	GET_ALL_CLIENT_LOADING,
	GET_ALL_CLIENT,
	GET_BANN_CLIENT_LOADING,
	GET_BANN_CLIENT,
	GET_ACTIVATED_CLIENT_LOADING,
	GET_ACTIVATED_CLIENT,
	GET_LENGTH_CLIENT_INFO_LOADING,
	GET_LENGTH_CLIENT_INFO,
	BAN_VERIFY_USER_LOADING,
	GET_MESSAGES_LOADING,
	GET_MESSAGES,
	DELETE_MESSAGE_LOADING,
	DELETE_MESSAGE
} from "../types";
import axios from "axios";
import {baseUrl} from "../../config";

export const getUsersCompanies=() => async (dispatch) => {
	dispatch({type: GET_All_COMPANIES_LOADING});
	try {
		const config={
			headers: {
				token: localStorage.getItem("token"),
			},
		};
		const {
			data: {users},
		}=await axios.get(`${baseUrl}/admin_all_companies`,config);
		dispatch({type: GET_ALL_COMPANIES,payload: users});
	} catch(error) {
		throw new Error("error");
	}
};
export const getActivatedCompanies=() => async (dispatch) => {
	dispatch({type: GET_ALL_VERIFIED_COMPANIES_LOADING});
	try {
		const config={
			headers: {
				token: localStorage.getItem("token"),
			},
		};
		const {
			data: {users},
		}=await axios.get(`${baseUrl}/admin_companies_verif`,config);

		dispatch({type: GET_ALL_VERIFIED_COMPANIES,payload: users});
	} catch(error) {
		throw new Error("error");
	}
};

export const getBanCompanies=() => async (dispatch) => {
	dispatch({type: GET_ALL_BANNED_COMPANIES_LOADING});
	try {
		const config={
			headers: {
				token: localStorage.getItem("token"),
			},
		};
		const {
			data: {users},
		}=await axios.get(`${baseUrl}/admin_companies_ban`,config);

		dispatch({type: GET_ALL_BANNED_COMPANIES,payload: users});
	} catch(error) {
		throw new Error("error");
	}
};

export const getLengthCompanyInfo=() => async (dispatch) => {
	dispatch({type: GET_LENGTH_COMPANY_INFO_LOADING});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	try {
		const {
			data: {companyBannedCount,allCompaniesCount,activatedCompaniesCount},
		}=await axios.get(`${baseUrl}/info_table_length_company`,config);
		dispatch({
			type: GET_LENGTH_COMPANY_INFO,
			payload: {
				companyBannedCount,
				allCompaniesCount,
				activatedCompaniesCount,
			},
		});
	} catch(error) {
		throw new Error("Error");
	}
};

export const getUsersClient=() => async (dispatch) => {
	dispatch({type: GET_ALL_CLIENT_LOADING});
	try {
		const config={
			headers: {
				token: localStorage.getItem("token"),
			},
		};
		const {
			data: {users},
		}=await axios.get(`${baseUrl}/admin_clients`,config);
		dispatch({type: GET_ALL_CLIENT,payload: users});
	} catch(error) {
		throw new Error("error");
	}
};

export const getBannedClients=() => async (dispatch) => {
	dispatch({type: GET_BANN_CLIENT_LOADING});
	try {
		const config={
			headers: {
				token: localStorage.getItem("token"),
			},
		};
		const {
			data: {users},
		}=await axios.get(`${baseUrl}/admin_client_ban`,config);
		dispatch({type: GET_BANN_CLIENT,payload: users});
	} catch(error) {
		throw new Error("error");
	}
};

export const getActivatedClients=() => async (dispatch) => {
	dispatch({type: GET_ACTIVATED_CLIENT_LOADING});
	try {
		const config={
			headers: {
				token: localStorage.getItem("token"),
			},
		};
		const {
			data: {users},
		}=await axios.get(`${baseUrl}/admin_client_verif`,config);
		dispatch({type: GET_ACTIVATED_CLIENT,payload: users});
	} catch(error) {
		throw new Error("error");
	}
};

export const getLengthClientInfo=() => async (dispatch) => {
	dispatch({type: GET_LENGTH_CLIENT_INFO_LOADING});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	try {
		const {
			data: {clientBannedCount,allClientsCount,activatedClientsCount},
		}=await axios.get(`${baseUrl}/info_table_length_client`,config);
		dispatch({
			type: GET_LENGTH_CLIENT_INFO,
			payload: {
				clientBannedCount,
				allClientsCount,
				activatedClientsCount,
			},
		});
	} catch(error) {
		throw new Error("Error");
	}
};

export const banOrVerifyUser=(id,choice,navigate) => async (dispatch) => {
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};

	try {
		choice==="client"
			? await axios.put(`${baseUrl}/admin_clients/${id}`,null,config)
			:await axios.put(`${baseUrl}/admin_companies/${id}`,null,config);
		if(choice==="client") {
			dispatch(getLengthClientInfo());
			dispatch(getUsersClient());
			navigate("/admin-space/customer/all_clients");
		} else {
			dispatch(getLengthCompanyInfo());
			dispatch(getUsersCompanies());
			navigate("/admin-space/company/all_companies");
		}
	} catch(error) {
		throw new Error("error");
	}
};

export const getMessages=() => async (dispatch) => {
	dispatch({type: GET_MESSAGES_LOADING});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	try {
		const {
			data: {messages},
		}=await axios.get(`${baseUrl}/admin_message`,config);
		dispatch({type: GET_MESSAGES,payload: messages});
	} catch(error) {
		throw new Error("error");
	}
};



export const deleteMessage=(id) => async (dispatch) => {
	dispatch({type: DELETE_MESSAGE_LOADING});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	try {
		await axios.delete(`${baseUrl}/admin_message/${id}`,config);
		dispatch({type: DELETE_MESSAGE});
		dispatch(getMessages());
	} catch(error) {
		throw new Error("error");
	}
};



