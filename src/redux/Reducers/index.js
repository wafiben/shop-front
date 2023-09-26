import {combineReducers} from "redux";
import listReducer from "./listOfProduct";
import authReducer from "./auth";
import companyReducer from "./comanyReducer";
import adminReducer from "./adminReducer";
const rootReducer=combineReducers({
	listReducer: listReducer,
	authReducer: authReducer,
	companyReducer: companyReducer,
	adminReducer: adminReducer
});
export default rootReducer;
