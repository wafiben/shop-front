import {
  LOGIN,
  GET_PROFILE,
  LOGOUT,
  REGISTER,
  REGISTER_COMPANY,
  LOAODING_PROFILE,
  UPDATE_PROFILE,
  LOAODING_CHECK_PASSWORD,
  VERFIY_TYPED_PASSWORD,
  SET_VERIFY_PASSWORD_FALSE,
  AUTH_FAILED,
  LOADING,
  GET_CODE_FROM_EMAIL,
  GET_CODE_FROM_EMAIL_LOADING,
  LOADING_VALIDATION_CODE,
  CHECK_VALIDATION_CODE,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  LOGIN_FAILED,
  LOGIN_FAILED_BANNED_USER,
  RESET_BANNED_USER,
} from "../types";

const initState = {
  isAuth: false,
  loading: false,
  user: null,
  loadingCheckPassword: false,
  checkpassword: false,
  emailToVerify: "",
  loadingValidationCode: false,
  checkValidationCode: null,
  errorReset: "",
  resetLoading: false,
  loginFailedMessage: "",
  userBanned: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case REGISTER_COMPANY:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        loading: false,
      };
    case RESET_BANNED_USER:
      return {
        ...state,
        userBanned: false,
      };
    case LOADING_VALIDATION_CODE:
      return { ...state, loadingValidationCode: true };
    case CHECK_VALIDATION_CODE:
      return {
        ...state,
        checkValidationCode: action.payload,
        loadingValidationCode: false,
      };
    case GET_CODE_FROM_EMAIL_LOADING:
      return { ...state, loadingSendCode: true };
    case GET_CODE_FROM_EMAIL:
      return {
        ...state,
        loadingSendCode: false,
        emailToVerify: action.payload,
      };
    case GET_PROFILE:
      return { ...state, user: action.payload, isAuth: true, loading: false };
    case LOGOUT:
      localStorage.clear();
      return { user: null, isAuth: false };
    case SET_VERIFY_PASSWORD_FALSE:
      return { ...state, checkpassword: false };
    case LOAODING_CHECK_PASSWORD:
      return { ...state, loadingCheckPassword: true };
    case VERFIY_TYPED_PASSWORD:
      return {
        ...state,
        checkpassword: action.payload,
        loadingCheckPassword: false,
      };
    case LOADING:
    case LOAODING_PROFILE:
      return { ...state, loading: true };
    case UPDATE_PROFILE:
      return { ...state, user: action.payload, loading: false };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        msgWrongPassword: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loginFailedMessage: action.payload,
      };
    case RESET_PASSWORD_FAILED:
      return { ...state, errorReset: action.payload, resetLoading: false };
    case RESET_PASSWORD_LOADING:
      return { ...state, resetLoading: true };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, resetLoading: false };
    case LOGIN_FAILED_BANNED_USER:
      return {
        ...state,
        loading: false,
        userBanned: true,
      };
    default:
      return state;
  }
};

export default authReducer;
