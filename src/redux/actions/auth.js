import {
	LOGIN,
	REGISTER,
	LOGOUT,
	AUTH_FAILED,
	LOADING,
	GET_PROFILE,
	REGISTER_COMPANY,
	LOAODING_PROFILE,
	UPDATE_PROFILE,
	VERFIY_TYPED_PASSWORD,
	LOAODING_CHECK_PASSWORD,
	SET_VERIFY_PASSWORD_FALSE,
	GET_CODE_FROM_EMAIL,
	GET_CODE_FROM_EMAIL_LOADING,
	CHECK_VALIDATION_CODE,
	LOADING_VALIDATION_CODE,
	RESET_PASSWORD_FAILED,
	RESET_PASSWORD_LOADING,
	RESET_PASSWORD_SUCCESS,
	LOGIN_FAILED,
	LOGIN_FAILED_BANNED_USER,
	RESET_BANNED_USER,
} from "../types";
import {baseUrl} from "../../config";
import axios from "axios";
const setRoleOnLocalStorage=(user) => {
	localStorage.setItem("role",user.role);
};
export const login=(userInfo,naviagte) => async (dispatch) => {
	dispatch({type: LOADING});
	try {
		const {
			data: {user,token},
		}=await axios.post(`${baseUrl}/login`,userInfo);
		dispatch({type: LOGIN,payload: {user,token}});
		setRoleOnLocalStorage(user);
		if(user.role[0]==="company") {
			naviagte("/company-space/dashboard");
		} else if(user.role[0]==="client") {
			naviagte("/client-space/home");
		} else {
			naviagte("/admin-space/company/all_companies");
		}
	} catch(error) {
		if(error.response.status===403) {
			dispatch({type: LOGIN_FAILED_BANNED_USER});
		} else {
			dispatch({
				type: LOGIN_FAILED,
				payload: error.response.data.msg,
			});
		}
	}
};
export const getProfile=() => async (dispatch) => {
	dispatch({type: LOAODING_PROFILE});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	try {
		const {
			data: {user},
		}=await axios.get(`${baseUrl}/profile`,config);
		setRoleOnLocalStorage(user);
		dispatch({type: GET_PROFILE,payload: user});
	} catch(error) {
		dispatch({type: AUTH_FAILED,payload: error.response.data.errors});
	}
};
export const registerClientAction=
	(userInfo,naviagte) => async (dispatch) => {
		try {
			dispatch({type: LOADING});
			const {
				data: {user,token},
			}=await axios.post(`${baseUrl}/register`,userInfo);
			dispatch({type: REGISTER,payload: {user,token}});
			setRoleOnLocalStorage(user);
			naviagte("/code-register-client");
		} catch(error) {
			console.log(error);
			dispatch({type: AUTH_FAILED,payload: error.response.data.errors});
		}
	};
export const loGout=(naviagte) => {
	naviagte("/");
	return {type: LOGOUT};
};
export const registerCompanyAction=
	(userInfo,naviagte) => async (dispatch) => {
		try {
			dispatch({type: LOADING});
			const {
				data: {user,token},
			}=await axios.post(`${baseUrl}/register-company`,userInfo);
			dispatch({type: REGISTER_COMPANY,payload: {user,token}});
			setRoleOnLocalStorage(user);
			naviagte("/company-space/dashboard");
		} catch(error) {
			dispatch({type: AUTH_FAILED,payload: error.response.data.errors});
		}
	};
export const updateProfileAction=(userInfo) => async (dispatch) => {
	dispatch({type: LOAODING_PROFILE});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	const {
		data: {user},
	}=await axios.put(`${baseUrl}/profile`,userInfo,config);
	dispatch({type: UPDATE_PROFILE,payload: user});
	try {
	} catch(error) {
		console.log(error);
	}
};

export const verifyTypedPassword=(password) => async (dispatch) => {
	dispatch({type: LOAODING_CHECK_PASSWORD});
	const config={
		headers: {
			token: localStorage.getItem("token"),
		},
	};
	const {
		data: {result},
	}=await axios.post(`${baseUrl}/profile`,{password: password},config);
	dispatch({type: VERFIY_TYPED_PASSWORD,payload: result});
	try {
	} catch(error) {
		console.log(error);
	}
};
export const getCodeVerification=(email,navigate) => async (dispatch) => {
	try {
		dispatch({type: GET_CODE_FROM_EMAIL_LOADING});
		await axios.post(`${baseUrl}/code_validation`,{email: email});
		dispatch({type: GET_CODE_FROM_EMAIL,payload: email});
		navigate("/code-verification");
	} catch(error) {
		console.log(error);
	}
};

export const verifyValidationCode=
	(code,emailToVerify,navigate) => async (dispatch) => {
		try {
			dispatch({type: LOADING_VALIDATION_CODE});
			const {
				data: {result},
			}=await axios.post(`${baseUrl}/validation`,{
				code: code,
				email: emailToVerify,
			});
			dispatch({type: CHECK_VALIDATION_CODE,payload: result});
			if(result) {
				navigate("/create-new-password");
			}
		} catch(error) {
			console.log(error);
		}
	};
export const resetPassword=(userInfo,navigate) => async (dispatch) => {
	try {
		dispatch({type: RESET_PASSWORD_LOADING});
		await axios.post(`${baseUrl}/reset-password`,userInfo);
		navigate("/");
		dispatch({type: RESET_PASSWORD_SUCCESS});
	} catch(error) {
		dispatch({type: RESET_PASSWORD_FAILED,payload: error.response.data.msg});
	}
};
export const verifyValidationCodeRegister=
	(code,emailToVerify,navigate) => async (dispatch) => {
		try {
			dispatch({type: LOADING_VALIDATION_CODE});
			const {
				data: {result},
			}=await axios.post(`${baseUrl}/validation`,{
				code: code,
				email: emailToVerify,
			});
			dispatch({type: CHECK_VALIDATION_CODE,payload: result});
			if(result) {
				navigate("/client-space/home");
			}
		} catch(error) {
			throw new Error("failed");
		}
	};

export const handlePasswordCheckState=() => {
	return {type: SET_VERIFY_PASSWORD_FALSE};
};

export const resteBannedUser=() => {
	return {type: RESET_BANNED_USER}

};
