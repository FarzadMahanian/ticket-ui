import ActionTypes from "../actions/ActionTypes";

let initialState = {
	isAuthenticated: false,
	isFetchingToken: false,
	isTokenFetchSuccessfull: false,
	token: null,
	user: null
}

export function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.AUTH_LOGED_IN:
			return {
				...state,
				isAuthenticated: true,
				token: action.token
			};		
		case ActionTypes.AUTH_SIGNED_OUT:
			return {
				...state,
				isAuthenticated: false,
				token: null
			};
		case ActionTypes.AUTH_SET_USER:
			return {
				...state,
				user: action.user
			}
		case ActionTypes.AUTH_SET_FETCH_TOKEN_STATE:
			return {
				...state,				
				isFetchingToken : action.isFetchingToken
			}
		case ActionTypes.AUTH_SET_IS_TOKEN_FETCH_SUCCESSFULL:
			return {
				...state,
				isTokenFetchSuccessfull: action.isSuccessfull				
			}
		case ActionTypes.AUTH_LOGIN:
		return {
				...state,
				isAuthenticated: true,
				token: action.token
			}
		default:
			return state;
	}
}
