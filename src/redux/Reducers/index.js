import { combineReducers } from "redux";
import listReducer from "./listOfProduct";
import authReducer from "./auth";
import companyReducer from "./comanyReducer";
import adminReducer from "./adminReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  listReducer: listReducer,
  authReducer: authReducer,
  companyReducer: companyReducer,
  adminReducer: adminReducer,
  shopReducer: shopReducer,
});
export default rootReducer;
