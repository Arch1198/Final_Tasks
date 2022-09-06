import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
   reducer,
});

const composeEnhancers =
   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, initialState, enhancer);

export default store;
