
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; 
import { AppReducer, LifeWebReducer, AuthReducer } from "./reducers";

export function configureStore(initialState)  {
	return createStore(combineReducers({
												app: AppReducer,
												lifeweb: LifeWebReducer,
												auth: AuthReducer
											}),
										 initialState,
										 applyMiddleware(thunk));
}