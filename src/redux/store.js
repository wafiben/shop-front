import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, {}, composeWithDevTools(middleware));


/* const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); */
export default store;


/* import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, {}, composeWithDevTools(middleware));

export default store; */
